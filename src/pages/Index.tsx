import WalletConnect from '@/components/WalletConnect';
import TelegramIntegration from '@/components/TelegramIntegration';
import TokenStats from '@/components/TokenStats';
import TokenList from '@/components/TokenList';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border/50 glass sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl animate-float">
                🚀
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                POEHALI
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Tokens
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Staking
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Docs
              </a>
            </nav>
            <div className="flex items-center gap-3 animate-fade-in">
              <WalletConnect />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="py-16 text-center animate-fade-in-up">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-block px-4 py-2 rounded-full glass border border-primary/30 text-sm font-medium text-primary mb-4 animate-scale-in glow">
              ✨ Welcome to the Future of Web3
            </div>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Decentralized
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
                Finance Platform
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect your wallet, trade tokens, and earn rewards in the most advanced Web3 ecosystem integrated with Telegram
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow group">
                <Icon name="Rocket" size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-border/50 hover:border-primary/50 hover:bg-card/60">
                <Icon name="Book" size={20} className="mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <TokenStats />
        </section>

        <section className="py-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TokenList />
          </div>
          <div className="space-y-6">
            <TelegramIntegration />
            
            <div className="glass p-6 rounded-xl animate-fade-in">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start glass hover:bg-card/60 border-border/50">
                  <Icon name="ArrowUpRight" size={18} className="mr-2" />
                  Send Tokens
                </Button>
                <Button variant="outline" className="w-full justify-start glass hover:bg-card/60 border-border/50">
                  <Icon name="ArrowDownLeft" size={18} className="mr-2" />
                  Receive Tokens
                </Button>
                <Button variant="outline" className="w-full justify-start glass hover:bg-card/60 border-border/50">
                  <Icon name="Repeat" size={18} className="mr-2" />
                  Swap Tokens
                </Button>
              </div>
            </div>

            <div className="glass p-6 rounded-xl animate-fade-in">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🎁</span>
                Rewards
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Staking APY</span>
                  <span className="font-bold text-green-500">24.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Your Rewards</span>
                  <span className="font-bold">145.23 POE</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 glow">
                  <Icon name="Gift" size={18} className="mr-2" />
                  Claim Rewards
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl text-center animate-fade-in-up hover:scale-105 transition-transform cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center text-3xl">
                🔒
              </div>
              <h3 className="text-xl font-bold mb-2">Secure</h3>
              <p className="text-muted-foreground text-sm">
                Bank-level security with multi-signature wallets
              </p>
            </div>
            <div className="glass p-6 rounded-xl text-center animate-fade-in-up hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center text-3xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-2">Fast</h3>
              <p className="text-muted-foreground text-sm">
                Lightning-fast transactions on Layer 2
              </p>
            </div>
            <div className="glass p-6 rounded-xl text-center animate-fade-in-up hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center text-3xl">
                🌍
              </div>
              <h3 className="text-xl font-bold mb-2">Global</h3>
              <p className="text-muted-foreground text-sm">
                Access from anywhere, integrated with Telegram
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 glass mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl">
                🚀
              </div>
              <span className="font-semibold">POEHALI</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Send" size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 POEHALI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
