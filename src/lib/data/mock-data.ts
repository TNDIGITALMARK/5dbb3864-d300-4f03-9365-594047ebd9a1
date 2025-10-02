import { Survey, AffiliateLink, DigitalProduct, PayoutProof, EarningsData, Achievement, User } from '@/types/earning';

export const mockUser: User = {
  id: '1',
  email: 'user@example.com',
  name: 'Alex Johnson',
  totalEarnings: 1247.50,
  availableBalance: 89.25,
  completedSurveys: 156,
  memberSince: '2024-01-15',
  level: 'Gold'
};

export const mockSurveys: Survey[] = [
  {
    id: '1',
    title: 'Summer Fashion Preferences',
    description: 'Share your opinions on the latest summer clothing trends',
    category: 'clothing',
    reward: 3.50,
    estimatedTime: 8,
    difficulty: 'easy',
    isCompleted: false
  },
  {
    id: '2',
    title: 'Movie Streaming Habits',
    description: 'Tell us about your favorite streaming platforms and viewing preferences',
    category: 'movies',
    reward: 4.25,
    estimatedTime: 12,
    difficulty: 'medium',
    isCompleted: false
  },
  {
    id: '3',
    title: 'Weekend Activities Survey',
    description: 'How do you spend your weekends? Help us understand lifestyle preferences',
    category: 'lifestyle',
    reward: 2.75,
    estimatedTime: 6,
    difficulty: 'easy',
    isCompleted: true,
    completedAt: '2024-03-14'
  },
  {
    id: '4',
    title: 'Restaurant Dining Experience',
    description: 'Rate your recent dining experiences and food preferences',
    category: 'food',
    reward: 5.00,
    estimatedTime: 15,
    difficulty: 'medium',
    isCompleted: false
  },
  {
    id: '5',
    title: 'Work from Home Setup',
    description: 'Share insights about your home office and productivity tools',
    category: 'lifestyle',
    reward: 6.50,
    estimatedTime: 20,
    difficulty: 'hard',
    isCompleted: false
  }
];

export const mockAffiliateLinks: AffiliateLink[] = [
  {
    id: '1',
    platform: 'Swagbucks',
    title: 'Earn with Swagbucks',
    description: 'Complete surveys, watch videos, and shop online to earn points redeemable for cash',
    url: 'https://oii.la/umJBHBFLk',
    estimatedEarning: '$50-200/month',
    category: 'Survey Platform',
    difficulty: 'beginner',
    featured: true
  },
  {
    id: '2',
    platform: 'Survey Junkie',
    title: 'Survey Junkie - Quick Cash',
    description: 'One of the most trusted survey platforms with consistent payouts',
    url: 'https://oii.la/umJBHBFLk',
    estimatedEarning: '$30-150/month',
    category: 'Survey Platform',
    difficulty: 'beginner',
    featured: true
  },
  {
    id: '3',
    platform: 'UserTesting',
    title: 'Get Paid to Test Websites',
    description: 'Earn $10-60 per test by testing websites and mobile apps',
    url: 'https://oii.la/hadD',
    estimatedEarning: '$100-500/month',
    category: 'User Testing',
    difficulty: 'intermediate',
    featured: true
  },
  {
    id: '4',
    platform: 'InboxDollars',
    title: 'InboxDollars Rewards',
    description: 'Earn cash for reading emails, playing games, and completing surveys',
    url: 'https://oii.la/hZc8LKFsj',
    estimatedEarning: '$25-100/month',
    category: 'Rewards Platform',
    difficulty: 'beginner',
    featured: false
  },
  {
    id: '5',
    platform: 'Upwork',
    title: 'Freelance on Upwork',
    description: 'Find freelance work in writing, design, programming, and more',
    url: 'https://oii.la/HF0wuerXG',
    estimatedEarning: '$200-2000/month',
    category: 'Freelancing',
    difficulty: 'advanced',
    featured: true
  },
  {
    id: '6',
    platform: 'EarnTracker',
    title: 'Premium Earning Opportunities',
    description: 'Access exclusive high-paying earning opportunities with advanced tracking',
    url: 'https://lakns.com/link?z=9937548&var={SOURCE_ID}&ymid={CLICK_ID}',
    estimatedEarning: '$300-1000/month',
    category: 'Premium Platform',
    difficulty: 'intermediate',
    featured: false
  }
];

export const mockDigitalProducts: DigitalProduct[] = [
  {
    id: '1',
    title: 'Complete Guide to Survey Income',
    description: 'Learn proven strategies to maximize your earnings from online surveys',
    price: 29.99,
    originalPrice: 49.99,
    category: 'ebook',
    author: 'Sarah Martinez',
    rating: 4.8,
    reviewCount: 234,
    imageUrl: '/images/products/survey-guide.jpg',
    featured: true,
    tags: ['surveys', 'passive income', 'beginner']
  },
  {
    id: '2',
    title: 'Passive Income Mastery Course',
    description: '30-day course covering multiple income streams and automation strategies',
    price: 97.00,
    originalPrice: 197.00,
    category: 'course',
    author: 'Mike Chen',
    rating: 4.9,
    reviewCount: 189,
    imageUrl: '/images/products/passive-income-course.jpg',
    featured: true,
    tags: ['passive income', 'automation', 'advanced']
  },
  {
    id: '3',
    title: 'Affiliate Marketing Blueprint',
    description: 'Step-by-step guide to building profitable affiliate marketing campaigns',
    price: 39.99,
    category: 'guide',
    author: 'Emma Thompson',
    rating: 4.7,
    reviewCount: 156,
    imageUrl: '/images/products/affiliate-blueprint.jpg',
    featured: false,
    tags: ['affiliate marketing', 'online business', 'intermediate']
  },
  {
    id: '4',
    title: 'Side Hustle Tracker Template',
    description: 'Spreadsheet templates to track your income, expenses, and goals',
    price: 14.99,
    category: 'template',
    author: 'David Kim',
    rating: 4.5,
    reviewCount: 89,
    imageUrl: '/images/products/tracker-template.jpg',
    featured: false,
    tags: ['tracking', 'organization', 'beginner']
  }
];

export const mockPayoutProofs: PayoutProof[] = [
  {
    id: '1',
    platform: 'paypal',
    amount: 127.50,
    date: '2024-03-15',
    imageUrl: '/images/payouts/paypal-proof-1.jpg',
    userInitials: 'AJ'
  },
  {
    id: '2',
    platform: 'cashapp',
    amount: 89.25,
    date: '2024-03-12',
    imageUrl: '/images/payouts/cashapp-proof-1.jpg',
    userInitials: 'MR'
  },
  {
    id: '3',
    platform: 'paypal',
    amount: 234.75,
    date: '2024-03-10',
    imageUrl: '/images/payouts/paypal-proof-2.jpg',
    userInitials: 'SK'
  },
  {
    id: '4',
    platform: 'venmo',
    amount: 56.00,
    date: '2024-03-08',
    imageUrl: '/images/payouts/venmo-proof-1.jpg',
    userInitials: 'LM'
  }
];

export const mockEarningsData: EarningsData = {
  totalEarnings: 1247.50,
  thisMonth: 234.75,
  thisWeek: 67.25,
  today: 12.50,
  completedSurveys: 156,
  averagePerSurvey: 3.85,
  streak: 12
};

export const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: 'First Survey Complete',
    description: 'Complete your first survey',
    icon: '🎯',
    unlocked: true,
    unlockedAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Survey Streak',
    description: 'Complete surveys for 7 consecutive days',
    icon: '🔥',
    unlocked: true,
    unlockedAt: '2024-02-01'
  },
  {
    id: '3',
    title: 'Century Club',
    description: 'Complete 100 surveys',
    icon: '💯',
    unlocked: true,
    unlockedAt: '2024-02-28'
  },
  {
    id: '4',
    title: 'High Earner',
    description: 'Earn $1000 in total',
    icon: '💰',
    unlocked: true,
    unlockedAt: '2024-03-10'
  },
  {
    id: '5',
    title: 'Survey Master',
    description: 'Complete 500 surveys',
    icon: '👑',
    unlocked: false,
    progress: {
      current: 156,
      total: 500
    }
  }
];