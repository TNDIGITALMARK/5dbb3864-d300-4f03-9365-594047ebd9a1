export interface User {
  id: string;
  email: string;
  name: string;
  totalEarnings: number;
  availableBalance: number;
  completedSurveys: number;
  memberSince: string;
  level: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
}

export interface Survey {
  id: string;
  title: string;
  description: string;
  category: 'clothing' | 'movies' | 'lifestyle' | 'food';
  reward: number;
  estimatedTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
  isCompleted: boolean;
  completedAt?: string;
}

export interface AffiliateLink {
  id: string;
  platform: string;
  title: string;
  description: string;
  url: string;
  estimatedEarning: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  featured: boolean;
}

export interface DigitalProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'ebook' | 'course' | 'guide' | 'template';
  author: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  featured: boolean;
  tags: string[];
}

export interface PayoutProof {
  id: string;
  platform: 'paypal' | 'cashapp' | 'venmo' | 'bank';
  amount: number;
  date: string;
  imageUrl: string;
  userInitials: string;
}

export interface EarningsData {
  totalEarnings: number;
  thisMonth: number;
  thisWeek: number;
  today: number;
  completedSurveys: number;
  averagePerSurvey: number;
  streak: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
  progress?: {
    current: number;
    total: number;
  };
}