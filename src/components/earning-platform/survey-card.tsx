'use client';

import { Survey } from '@/types/earning';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, DollarSign, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SurveyCardProps {
  survey: Survey;
  onStart?: (surveyId: string) => void;
}

const categoryColors = {
  clothing: 'bg-pink-100 text-pink-800',
  movies: 'bg-purple-100 text-purple-800',
  lifestyle: 'bg-blue-100 text-blue-800',
  food: 'bg-orange-100 text-orange-800'
};

const difficultyColors = {
  easy: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  hard: 'bg-red-100 text-red-800'
};

export default function SurveyCard({ survey, onStart }: SurveyCardProps) {
  return (
    <Card className={cn(
      'hover:shadow-lg transition-all duration-200 border-2',
      survey.isCompleted
        ? 'bg-green-50 border-green-200'
        : 'hover:border-primary/20 hover:shadow-primary/5'
    )}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2 text-foreground">{survey.title}</h3>
            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
              {survey.description}
            </p>
          </div>
          {survey.isCompleted && (
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 ml-2" />
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge
            variant="secondary"
            className={cn('capitalize', categoryColors[survey.category])}
          >
            {survey.category}
          </Badge>
          <Badge
            variant="outline"
            className={cn('capitalize', difficultyColors[survey.difficulty])}
          >
            {survey.difficulty}
          </Badge>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{survey.estimatedTime} min</span>
            </div>
            <div className="flex items-center gap-1 font-semibold text-green-600">
              <DollarSign className="w-4 h-4" />
              <span>${survey.reward.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        {survey.isCompleted ? (
          <Button
            variant="outline"
            className="w-full"
            disabled
          >
            Completed {survey.completedAt && new Date(survey.completedAt).toLocaleDateString()}
          </Button>
        ) : (
          <Button
            onClick={() => onStart?.(survey.id)}
            className="w-full bg-primary hover:bg-primary/90"
          >
            Start Survey
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}