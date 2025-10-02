'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockDigitalProducts } from '@/lib/data/mock-data';
import { DigitalProduct } from '@/types/earning';
import { Search, Star, ShoppingCart, BookOpen, GraduationCap, FileText, Layout, Filter } from 'lucide-react';

const categoryIcons = {
  ebook: BookOpen,
  course: GraduationCap,
  guide: FileText,
  template: Layout
};

const categoryColors = {
  ebook: 'bg-blue-100 text-blue-800',
  course: 'bg-purple-100 text-purple-800',
  guide: 'bg-green-100 text-green-800',
  template: 'bg-orange-100 text-orange-800'
};

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = mockDigitalProducts
    .filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'featured':
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

  const handlePurchase = (productId: string) => {
    console.log('Purchasing product:', productId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-foreground">Digital Products Marketplace</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover proven guides, courses, and resources to maximize your online earnings.
            All products come with our satisfaction guarantee and instant download.
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="ebook">eBooks</SelectItem>
                  <SelectItem value="course">Courses</SelectItem>
                  <SelectItem value="guide">Guides</SelectItem>
                  <SelectItem value="template">Templates</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="w-4 h-4" />
                {filteredProducts.length} products found
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Products Banner */}
        {sortBy === 'featured' && (
          <Card className="mb-8 border-primary/20 bg-gradient-to-r from-primary/5 to-green-100/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <h2 className="text-xl font-bold text-foreground">Featured Products</h2>
              </div>
              <p className="text-muted-foreground">
                Our most popular and highest-rated products, personally recommended by successful members.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const IconComponent = categoryIcons[product.category];

            return (
              <Card
                key={product.id}
                className={`hover:shadow-lg transition-all duration-200 ${
                  product.featured ? 'ring-2 ring-primary/20 border-primary/30' : ''
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-5 h-5 text-primary" />
                      <Badge
                        variant="secondary"
                        className={categoryColors[product.category]}
                      >
                        {product.category}
                      </Badge>
                    </div>
                    {product.featured && (
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    )}
                  </div>

                  <CardTitle className="text-lg leading-tight">{product.title}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{product.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({product.reviewCount} reviews)
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        by {product.author}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {product.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-green-600">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      {product.originalPrice && (
                        <Badge variant="destructive" className="bg-red-100 text-red-800">
                          Save ${(product.originalPrice - product.price).toFixed(2)}
                        </Badge>
                      )}
                    </div>

                    <Button
                      onClick={() => handlePurchase(product.id)}
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Purchase & Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <Card className="text-center p-12">
            <CardContent>
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSortBy('featured');
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Bottom CTA */}
        <Card className="mt-12 bg-gradient-to-r from-primary to-green-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Maximize Your Earnings?</h2>
            <p className="mb-6 opacity-90">
              Our digital products have helped thousands of members increase their monthly earnings.
              Start with our most popular guide and see results within days.
            </p>
            <Button size="lg" variant="secondary">
              <Star className="w-5 h-5 mr-2" />
              View Best Sellers
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}