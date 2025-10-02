'use client';

import { PayoutProof } from '@/types/earning';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Calendar, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PayoutProofProps {
  proof: PayoutProof;
  className?: string;
}

const platformColors = {
  paypal: 'bg-blue-100 text-blue-800',
  cashapp: 'bg-green-100 text-green-800',
  venmo: 'bg-purple-100 text-purple-800',
  bank: 'bg-gray-100 text-gray-800'
};

const platformIcons = {
  paypal: '💳',
  cashapp: '💚',
  venmo: '💜',
  bank: '🏦'
};

export default function PayoutProof({ proof, className }: PayoutProofProps) {
  return (
    <Card className={cn('border-green-200 bg-green-50', className)}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold">
              {proof.userInitials}
            </div>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <Badge
            variant="secondary"
            className={cn('capitalize', platformColors[proof.platform])}
          >
            {platformIcons[proof.platform]} {proof.platform}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-lg font-semibold text-green-600">
            <DollarSign className="w-5 h-5" />
            <span>${proof.amount.toFixed(2)}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{new Date(proof.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}</span>
          </div>

          <p className="text-xs text-muted-foreground">
            Verified payout from our platform
          </p>
        </div>
      </CardContent>
    </Card>
  );
}