import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface TokenStatsProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
  delay?: number;
}

function StatCard({ title, value, change, isPositive, icon, delay = 0 }: TokenStatsProps) {
  return (
    <Card
      className="glass p-6 hover:bg-card/60 transition-all duration-300 cursor-pointer group hover:scale-105 animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl ${isPositive ? 'bg-green-500/20' : 'bg-red-500/20'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          <Icon name={isPositive ? 'TrendingUp' : 'TrendingDown'} size={16} />
          {change}
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </Card>
  );
}

export default function TokenStats() {
  const stats = [
    {
      title: 'Total Value Locked',
      value: '$2.4M',
      change: '+12.5%',
      isPositive: true,
      icon: '💎',
    },
    {
      title: 'Token Price',
      value: '$0.0234',
      change: '+8.2%',
      isPositive: true,
      icon: '📈',
    },
    {
      title: 'Market Cap',
      value: '$845K',
      change: '-3.1%',
      isPositive: false,
      icon: '🏦',
    },
    {
      title: 'Holders',
      value: '12,453',
      change: '+15.7%',
      isPositive: true,
      icon: '👥',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={stat.title} {...stat} delay={index * 0.1} />
      ))}
    </div>
  );
}
