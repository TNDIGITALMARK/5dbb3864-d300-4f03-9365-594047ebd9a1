'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import EarningsStats from '@/components/earning-platform/earnings-stats';
import AffiliateLinkCard from '@/components/earning-platform/affiliate-link-card';
import SurveyCard from '@/components/earning-platform/survey-card';
import PayoutProof from '@/components/earning-platform/payout-proof';
import { mockUser, mockEarningsData, mockAffiliateLinks, mockSurveys, mockPayoutProofs, mockAchievements } from '@/lib/data/mock-data';
import { TrendingUp, Award, Target, Clock, DollarSign, Star, Trophy, Gift } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const availableSurveys = mockSurveys.filter(survey => !survey.isCompleted);
  const completedSurveys = mockSurveys.filter(survey => survey.isCompleted);
  const unlockedAchievements = mockAchievements.filter(achievement => achievement.unlocked);
  const lockedAchievements = mockAchievements.filter(achievement => !achievement.unlocked);

  const handleSurveyStart = (surveyId: string) => {
    console.log('Starting survey:', surveyId);
  };

  const handleAffiliateClick = (affiliateId: string) => {
    console.log('Clicked affiliate:', affiliateId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, {mockUser.name}!</h1>
              <p className="text-muted-foreground">Track your earnings and discover new opportunities</p>
            </div>
            <div className="text-right">
              <Badge className={`px-3 py-1 text-sm ${
                mockUser.level === 'Gold' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {mockUser.level} Member
              </Badge>
              <div className="mt-2 text-2xl font-bold text-green-600">
                ${mockUser.availableBalance.toFixed(2)}
              </div>
              <p className="text-sm text-muted-foreground">Available Balance</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-4">
            <Link href="/marketplace">
              <Button className="bg-primary hover:bg-primary/90">
                <Star className="w-4 h-4 mr-2" />
                Browse Products
              </Button>
            </Link>
            <Button variant="outline">
              <DollarSign className="w-4 h-4 mr-2" />
              Request Payout
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 max-w-md">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="surveys">Surveys</TabsTrigger>
            <TabsTrigger value="affiliates">Partners</TabsTrigger>
            <TabsTrigger value="achievements">Rewards</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Earnings Stats */}
            <EarningsStats data={mockEarningsData} />

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Available Surveys
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {availableSurveys.slice(0, 3).map((survey) => (
                    <SurveyCard key={survey.id} survey={survey} onStart={handleSurveyStart} />
                  ))}
                  <Button variant="outline" className="w-full">
                    View All Surveys
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Recent Payouts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockPayoutProofs.slice(0, 3).map((proof) => (
                    <PayoutProof key={proof.id} proof={proof} />
                  ))}
                  <p className="text-sm text-muted-foreground text-center">
                    Your next payout will be processed within 24 hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="surveys" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Available Surveys ({availableSurveys.length})</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Complete surveys to earn money. Higher difficulty surveys pay more.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {availableSurveys.map((survey) => (
                      <SurveyCard key={survey.id} survey={survey} onStart={handleSurveyStart} />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Completed Surveys ({completedSurveys.length})</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Your survey history and earnings breakdown.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {completedSurveys.map((survey) => (
                      <SurveyCard key={survey.id} survey={survey} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="affiliates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Partner Earning Opportunities</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Earn money through our trusted partner platforms. Click to start earning immediately.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mockAffiliateLinks.map((affiliate) => (
                    <AffiliateLinkCard
                      key={affiliate.id}
                      affiliate={affiliate}
                      onVisit={handleAffiliateClick}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-600" />
                    Unlocked Achievements ({unlockedAchievements.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {unlockedAchievements.map((achievement) => (
                      <Card key={achievement.id} className="border-green-200 bg-green-50">
                        <CardContent className="p-4 text-center">
                          <div className="text-4xl mb-2">{achievement.icon}</div>
                          <h3 className="font-semibold mb-1">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            Unlocked {achievement.unlockedAt && new Date(achievement.unlockedAt).toLocaleDateString()}
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-gray-600" />
                    Progress Towards New Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {lockedAchievements.map((achievement) => (
                      <Card key={achievement.id} className="border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="text-3xl opacity-50">{achievement.icon}</div>
                            <div>
                              <h3 className="font-semibold">{achievement.title}</h3>
                              <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            </div>
                          </div>
                          {achievement.progress && (
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Progress</span>
                                <span>{achievement.progress.current} / {achievement.progress.total}</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-primary h-2 rounded-full"
                                  style={{
                                    width: `${(achievement.progress.current / achievement.progress.total) * 100}%`
                                  }}
                                ></div>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}