import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function WalletConnect() {
  const [isOpen, setIsOpen] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null);
  const { toast } = useToast();

  const wallets = [
    {
      name: 'MetaMask',
      icon: '🦊',
      description: 'Connect to your MetaMask wallet',
    },
    {
      name: 'WalletConnect',
      icon: '🔗',
      description: 'Scan with WalletConnect',
    },
    {
      name: 'Coinbase',
      icon: '🔵',
      description: 'Connect to Coinbase Wallet',
    },
    {
      name: 'Telegram Wallet',
      icon: '✈️',
      description: 'Connect via Telegram',
    },
  ];

  const handleConnect = (walletName: string) => {
    setTimeout(() => {
      setConnectedWallet(walletName);
      setIsOpen(false);
      toast({
        title: 'Wallet Connected!',
        description: `Successfully connected to ${walletName}`,
      });
    }, 500);
  };

  const handleDisconnect = () => {
    setConnectedWallet(null);
    toast({
      title: 'Wallet Disconnected',
      description: 'Your wallet has been disconnected',
    });
  };

  return (
    <>
      {connectedWallet ? (
        <div className="flex items-center gap-3">
          <div className="glass px-4 py-2 rounded-lg flex items-center gap-2 animate-fade-in">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">
              {connectedWallet.slice(0, 6)}...{connectedWallet.slice(-4)}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDisconnect}
            className="text-muted-foreground hover:text-foreground"
          >
            <Icon name="LogOut" size={18} />
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary/90 glow relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          <Icon name="Wallet" size={18} className="mr-2 relative z-10" />
          <span className="relative z-10">Connect Wallet</span>
        </Button>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="glass border-border/50 animate-scale-in">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Connect Wallet</DialogTitle>
            <DialogDescription>
              Choose your preferred wallet to connect
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            {wallets.map((wallet, index) => (
              <button
                key={wallet.name}
                onClick={() => handleConnect(wallet.name)}
                className="w-full glass p-4 rounded-xl flex items-center gap-4 hover:bg-card/60 transition-all duration-300 group border border-transparent hover:border-primary/50 hover:glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl group-hover:scale-110 transition-transform">
                  {wallet.icon}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-foreground">{wallet.name}</h3>
                  <p className="text-sm text-muted-foreground">{wallet.description}</p>
                </div>
                <Icon
                  name="ChevronRight"
                  size={20}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
