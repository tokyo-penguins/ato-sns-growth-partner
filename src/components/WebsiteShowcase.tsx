import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Gift } from "lucide-react";
const WebsiteShowcase = () => {
  return <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Special Offer Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-6">
            <Gift className="w-5 h-5 text-accent mr-2" />
            <span className="text-accent font-semibold">特別特典</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="bg-gradient-primary bg-clip-text text-transparent">20万円相当</span>
            のWebサイトを無料提供
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            SNS運用代行をご契約いただいた方限定で、プロフェッショナルなWebサイトを無料で制作いたします
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-border/50 overflow-hidden">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Website Preview */}
                <div className="order-2 md:order-1">
                  <div className="bg-muted/30 rounded-lg p-2 shadow-inner">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      {/* Browser Chrome */}
                      <div className="bg-muted flex items-center px-4 py-2 border-b">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-destructive rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="bg-background rounded px-3 py-1 text-xs text-muted-foreground">
                            examplewebsite.com
                          </div>
                        </div>
                      </div>
                      
                      {/* Website Content */}
                      <iframe src="https://examplewebsite.com" className="w-full h-64 border-0" title="Website Sample" loading="lazy" />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    高品質なWebサイトを追加費用なしで
                  </h3>
                  <ul className="space-y-3 mb-6 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      レスポンシブデザイン対応
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      SEO最適化済み
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      高速ページ読み込み
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      コンテンツ管理システム
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      SNSとの連携機能
                    </li>
                  </ul>
                  
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
                    <p className="text-accent font-semibold mb-2">
                      通常価格: ¥200,000
                    </p>
                    <p className="text-foreground text-sm">
                      SNS運用代行契約で <strong>完全無料</strong>
                    </p>
                  </div>

                  <Button className="w-full bg-gradient-primary text-white hover:shadow-glow transition-all duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    サンプルサイトを見る
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          

          

          <Card className="text-center hover:shadow-elegant transition-all duration-300 border-border/50">
            
          </Card>
        </div>
      </div>
    </section>;
};
export default WebsiteShowcase;