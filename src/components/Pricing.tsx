import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      icon: <Zap className="w-8 h-8 text-primary" />,
      price: "¥98,000",
      period: "/月",
      description: "SNS運用を始めたい企業様におすすめ",
      features: [
        "月20投稿まで",
        "Instagram・Twitter運用",
        "基本的な画像・動画制作",
        "月次レポート",
        "メールサポート",
        "ハッシュタグ戦略"
      ],
      popular: false,
      gradient: "from-primary/10 to-primary/5"
    },
    {
      name: "Standard",
      icon: <Star className="w-8 h-8 text-accent" />,
      price: "¥198,000",
      period: "/月",
      description: "本格的にSNSマーケティングを行いたい企業様向け",
      features: [
        "月40投稿まで",
        "Instagram・Twitter・TikTok運用",
        "プロレベルの画像・動画制作",
        "競合分析レポート",
        "電話・チャットサポート",
        "インフルエンサー連携",
        "広告運用サポート",
        "ライブ配信サポート"
      ],
      popular: true,
      gradient: "from-accent/10 to-accent/5"
    },
    {
      name: "Premium",
      icon: <Crown className="w-8 h-8 text-yellow-500" />,
      price: "¥398,000",
      period: "/月",
      description: "最高レベルのSNS戦略で圧倒的成果を目指す企業様向け",
      features: [
        "無制限投稿",
        "全SNSプラットフォーム対応",
        "専属デザイナー・動画クリエイター",
        "週次詳細レポート",
        "24時間サポート",
        "専属アカウントマネージャー",
        "バイラル戦略立案",
        "メディア露出サポート",
        "イベント企画・運営",
        "独自分析ツール提供"
      ],
      popular: false,
      gradient: "from-yellow-500/10 to-yellow-500/5"
    }
  ];

  return (
    <section id="plans" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            料金
            <span className="bg-gradient-primary bg-clip-text text-transparent">プラン</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            あなたのビジネス規模と目標に合わせて最適なプランをお選びください
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative hover:shadow-elegant transition-all duration-300 animate-fade-in border-border/50 ${
                plan.popular ? 'border-accent/50 shadow-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    最人気
                  </div>
                </div>
              )}
              
              <CardHeader className={`text-center bg-gradient-to-br ${plan.gradient} rounded-t-lg`}>
                <div className="flex justify-center mb-4">
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="text-4xl font-bold text-foreground">
                  {plan.price}
                  <span className="text-lg font-normal text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="p-6">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-primary text-white hover:shadow-glow' 
                      : 'border border-border hover:bg-muted'
                  } transition-all duration-300`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.name}プランを選択
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto shadow-elegant border-border/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                全プラン共通特典
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  初期費用無料
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  契約期間縛りなし
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  無料相談・戦略立案
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2" />
                  成果保証制度
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <p className="text-accent font-semibold">
                  🎁 ご契約特典：20万円相当のWebサイト制作を無料でご提供
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;