'use client';

import { EarningsData } from '@/types/earning';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, DollarSign, Calendar, Zap, Target, Award } from 'lucide-react';

interface EarningsStatsProps {
  data: EarningsData;
}

export default function EarningsStats({ data }: EarningsStatsProps) {
  const stats = [
    {
      title: 'Total Earnings',
      value: `$${data.totalEarnings.toFixed(2)}`,
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'This Month',
      value: `$${data.thisMonth.toFixed(2)}`,
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'This Week',
      value: `$${data.thisWeek.toFixed(2)}`,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Today',
      value: `$${data.today.toFixed(2)}`,
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'Completed Surveys',
      value: data.completedSurveys.toString(),
      icon: Target,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      title: 'Daily Streak',
      value: `${data.streak} days`,
      icon: Award,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat) => {
        const IconComponent = stat.icon;

        return (
          <Card key={stat.title} className="hover:shadow-md transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <IconComponent className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              {stat.title === 'Completed Surveys' && (
                <p className="text-xs text-muted-foreground mt-1">
                  Average: ${data.averagePerSurvey.toFixed(2)} per survey
                </p>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}