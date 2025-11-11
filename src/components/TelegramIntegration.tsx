import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function TelegramIntegration() {
  const [isTelegramUser, setIsTelegramUser] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Telegram?.WebApp) {
      const tg = (window as any).Telegram.WebApp;
      tg.ready();
      
      if (tg.initDataUnsafe?.user) {
        setIsTelegramUser(true);
        setUserData(tg.initDataUnsafe.user);
        toast({
          title: 'Welcome from Telegram!',
          description: `Hello, ${tg.initDataUnsafe.user.first_name}!`,
        });
      }
    }
  }, [toast]);

  const openTelegramBot = () => {
    toast({
      title: 'Opening Telegram',
      description: 'Redirecting to our Telegram bot...',
    });
  };

  if (!isTelegramUser) {
    return (
      <Card className="glass p-6 animate-fade-in">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-3xl">✈️</span>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Connect via Telegram</h3>
            <p className="text-muted-foreground text-sm">
              Access exclusive features through our Telegram Mini App
            </p>
          </div>
          <Button
            onClick={openTelegramBot}
            className="bg-secondary hover:bg-secondary/90 glow-blue"
          >
            <Icon name="Send" size={18} className="mr-2" />
            Open in Telegram
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="glass p-6 border-primary/30 animate-fade-in glow">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
          {userData?.first_name?.[0] || '👤'}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">
            {userData?.first_name} {userData?.last_name}
          </h3>
          <p className="text-sm text-muted-foreground">
            Connected via Telegram
          </p>
        </div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      </div>
    </Card>
  );
}
