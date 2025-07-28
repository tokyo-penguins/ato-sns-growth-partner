import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube } from "lucide-react";
const Footer = () => {
  return <footer className="bg-foreground text-white py-20">
      <div className="container mx-auto px-6">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <Card className="bg-gradient-primary border-0 shadow-glow max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                今すぐSNS運用を始めませんか？
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                無料相談で、あなたのビジネスに最適なSNS戦略をご提案いたします
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                  無料相談を申し込む
                </Button>
                
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              ATO
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              プロフェッショナルなSNS運用代行で、あなたのビジネスを次のレベルへ導きます。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-primary-glow transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary-glow transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary-glow transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">サービス</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-primary-glow transition-colors">Instagram運用代行</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Twitter運用代行</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">TikTok運用代行</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">SNS広告運用</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">コンテンツ制作</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">クイックリンク</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#services" className="hover:text-primary-glow transition-colors">サービス</a></li>
              <li><a href="#results" className="hover:text-primary-glow transition-colors">実績</a></li>
              <li><a href="#plans" className="hover:text-primary-glow transition-colors">料金プラン</a></li>
              <li><a href="#flow" className="hover:text-primary-glow transition-colors">ご利用の流れ</a></li>
              <li><a href="#about" className="hover:text-primary-glow transition-colors">代表挨拶</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">お問い合わせ</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <span>info@ato-sns.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1" />
                <span>東京都渋谷区渋谷1-1-1<br />渋谷ビル10F</span>
              </div>
            </div>
            <div className="mt-4 text-sm text-white/60">
              平日 9:00-18:00<br />
              土日祝日休み
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm">
            © 2024 株式会社ATO. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-primary-glow text-sm transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="text-white/60 hover:text-primary-glow text-sm transition-colors">
              利用規約
            </a>
            <a href="#" className="text-white/60 hover:text-primary-glow text-sm transition-colors">
              特定商取引法に基づく表示
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;