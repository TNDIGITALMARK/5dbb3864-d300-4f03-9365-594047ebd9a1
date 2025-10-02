'use client';

import { AffiliateLink } from '@/types/earning';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AffiliateLinkCardProps {
  affiliate: AffiliateLink;
  onVisit?: (affiliateId: string) => void;
}

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced: 'bg-red-100 text-red-800'
};

export default function AffiliateLinkCard({ affiliate, onVisit }: AffiliateLinkCardProps) {
  const handleVisit = () => {
    onVisit?.(affiliate.id);
    window.open(affiliate.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className={cn(
      'hover:shadow-lg transition-all duration-200 border-2',
      affiliate.featured
        ? 'ring-2 ring-primary/20 border-primary/30'
        : 'hover:border-primary/20 hover:shadow-primary/5'
    )}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-lg text-foreground">{affiliate.title}</h3>
              {affiliate.featured && (
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
              )}
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              {affiliate.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {affiliate.category}
          </Badge>
          <Badge
            variant="outline"
            className={cn('capitalize', difficultyColors[affiliate.difficulty])}
          >
            {affiliate.difficulty}
          </Badge>
          <Badge variant="outline" className="bg-green-100 text-green-800">
            {affiliate.platform}
          </Badge>
        </div>

        <div className="flex items-center gap-2 text-lg font-semibold text-green-600 mb-2">
          <TrendingUp className="w-5 h-5" />
          <span>{affiliate.estimatedEarning}</span>
        </div>

        <p className="text-xs text-muted-foreground">Estimated monthly earnings</p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleVisit}
          className="w-full bg-primary hover:bg-primary/90"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Start Earning Now
        </Button>
      </CardFooter>
    </Card>
  );
}