import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Token {
  name: string;
  symbol: string;
  price: string;
  change24h: number;
  volume: string;
  icon: string;
}

export default function TokenList() {
  const tokens: Token[] = [
    {
      name: 'POEHALI',
      symbol: 'POE',
      price: '$0.0234',
      change24h: 8.2,
      volume: '$124K',
      icon: '🚀',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$2,845.50',
      change24h: 5.4,
      volume: '$8.2B',
      icon: '⟠',
    },
    {
      name: 'Toncoin',
      symbol: 'TON',
      price: '$5.42',
      change24h: -2.1,
      volume: '$245M',
      icon: '💎',
    },
  ];

  return (
    <Card className="glass p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Token Markets</h2>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
          <Icon name="RefreshCw" size={18} className="mr-2" />
          Refresh
        </Button>
      </div>
      <div className="space-y-3">
        {tokens.map((token, index) => (
          <div
            key={token.symbol}
            className="glass p-4 rounded-xl flex items-center justify-between hover:bg-card/60 transition-all duration-300 group cursor-pointer animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {token.icon}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{token.name}</h3>
                <p className="text-sm text-muted-foreground">{token.symbol}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">{token.price}</p>
              <div className="flex items-center gap-1 justify-end">
                <Icon
                  name={token.change24h > 0 ? 'TrendingUp' : 'TrendingDown'}
                  size={14}
                  className={token.change24h > 0 ? 'text-green-500' : 'text-red-500'}
                />
                <span
                  className={`text-sm font-medium ${
                    token.change24h > 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {token.change24h > 0 ? '+' : ''}
                  {token.change24h}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
