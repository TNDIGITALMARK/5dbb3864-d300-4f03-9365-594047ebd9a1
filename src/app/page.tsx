'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AffiliateLinkCard from '@/components/earning-platform/affiliate-link-card';
import PayoutProof from '@/components/earning-platform/payout-proof';
import SurveyCard from '@/components/earning-platform/survey-card';
import { mockAffiliateLinks, mockPayoutProofs, mockSurveys } from '@/lib/data/mock-data';
import { TrendingUp, DollarSign, Users, Star, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function Homepage() {
  const featuredAffiliates = mockAffiliateLinks.filter(link => link.featured).slice(0, 3);
  const availableSurveys = mockSurveys.filter(survey => !survey.isCompleted).slice(0, 2);
  const recentProofs = mockPayoutProofs.slice(0, 3);

  const handleAffiliateClick = (affiliateId: string) => {
    console.log('Clicked affiliate:', affiliateId);
  };

  const handleSurveyStart = (surveyId: string) => {
    console.log('Started survey:', surveyId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 px-4 py-2 text-sm bg-green-100 text-green-800 hover:bg-green-100">
            🎉 Over $50,000 paid out to members this month
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Turn Your <span className="text-primary">Opinions</span> Into
            <br />
            <span className="text-green-600">Real Money</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands earning $200-$1000+ monthly through surveys, affiliate programs,
            and our proven digital guides. Get instant access to top earning opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/dashboard">
              <Button size="lg" className="px-8 py-3 text-lg bg-primary hover:bg-primary/90">
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Earning Now
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                <Star className="w-5 h-5 mr-2" />
                View Digital Products
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'Active Members', value: '15,234+', icon: Users },
              { label: 'Total Payouts', value: '$847K+', icon: DollarSign },
              { label: 'Avg Monthly Earnings', value: '$340', icon: TrendingUp },
              { label: 'Success Rate', value: '94%', icon: CheckCircle }
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instant Access - Featured Affiliate Links */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              🚀 Instant Access - Start Earning Today
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              No waiting, no approval needed. Click any link below and start earning immediately with our
              trusted partner platforms. These are the exact same platforms our top earners use daily.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredAffiliates.map((affiliate) => (
              <AffiliateLinkCard
                key={affiliate.id}
                affiliate={affiliate}
                onVisit={handleAffiliateClick}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/dashboard">
              <Button variant="outline" size="lg">
                View All Opportunities <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Payout Proofs */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              💰 Real People, Real Payouts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See actual payments received by our members. These are real screenshots from real users
              who followed our proven strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentProofs.map((proof) => (
              <PayoutProof key={proof.id} proof={proof} />
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Join over 15,000 members who have received verified payouts
            </p>
          </div>
        </div>
      </section>

      {/* Quick Survey Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              📋 Quick Surveys Available Now
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start with these quick surveys while you explore affiliate opportunities.
              Each survey takes just minutes and pays instantly to your account.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {availableSurveys.map((survey) => (
              <SurveyCard
                key={survey.id}
                survey={survey}
                onStart={handleSurveyStart}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <CheckCircle className="w-5 h-5 mr-2" />
                Access All Surveys
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Earning Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied members and start earning money online today.
            No experience required - we'll guide you every step of the way.
          </p>
          <Link href="/dashboard">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
              <DollarSign className="w-5 h-5 mr-2" />
              Get Started - It's Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}