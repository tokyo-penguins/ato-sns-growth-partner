import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ATO
            </div>
            <div className="ml-2 text-sm text-muted-foreground hidden sm:block">SNS戦略運用代行</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              サービス
            </a>
            <a href="#results" className="text-foreground hover:text-primary transition-colors">
              実績
            </a>
            <a href="#plans" className="text-foreground hover:text-primary transition-colors">
              料金プラン
            </a>
            <a href="#flow" className="text-foreground hover:text-primary transition-colors">
              ご利用の流れ
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              代表挨拶
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-primary text-white hover:shadow-glow transition-all duration-300">
              お問い合わせ
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border bg-white/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-foreground hover:text-primary transition-colors py-2">
                サービス
              </a>
              <a href="#results" className="text-foreground hover:text-primary transition-colors py-2">
                実績
              </a>
              <a href="#plans" className="text-foreground hover:text-primary transition-colors py-2">
                料金プラン
              </a>
              <a href="#flow" className="text-foreground hover:text-primary transition-colors py-2">
                ご利用の流れ
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">
                代表挨拶
              </a>
              <Button className="bg-gradient-primary text-white mt-4">
                お問い合わせ
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;