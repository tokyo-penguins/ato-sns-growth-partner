import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Calculator, Play, CreditCard } from "lucide-react";

const Flow = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-12 h-12 text-primary" />,
      title: "お問い合わせ",
      description: "まずはお気軽にお問い合わせください。現在の課題やご要望をお聞かせください。",
      details: [
        "無料相談フォームまたはお電話",
        "現状のSNS運用状況をヒアリング",
        "目標設定とKPI確認"
      ]
    },
    {
      icon: <Calculator className="w-12 h-12 text-accent" />,
      title: "お見積もり・ご相談",
      description: "ヒアリング内容を基に、最適なプランとお見積もりをご提案いたします。",
      details: [
        "詳細な戦略プランのご提案",
        "カスタマイズされた料金プラン",
        "スケジュール調整と契約内容確認"
      ]
    },
    {
      icon: <Play className="w-12 h-12 text-green-500" />,
      title: "作業開始・進捗確認",
      description: "契約後すぐに専門チームが作業を開始。定期的に進捗をご報告いたします。",
      details: [
        "専属チームのアサイン",
        "コンテンツ制作開始",
        "週次・月次の進捗レポート"
      ]
    },
    {
      icon: <CreditCard className="w-12 h-12 text-yellow-500" />,
      title: "お支払い",
      description: "成果に応じた透明性の高い料金体系。月末締めの翌月末払いです。",
      details: [
        "月額固定料金制",
        "成果連動型オプション",
        "請求書発行とお支払い"
      ]
    }
  ];

  return (
    <section id="flow" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            ご利用の
            <span className="bg-gradient-primary bg-clip-text text-transparent">流れ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            シンプルで分かりやすい4ステップでサービスを開始できます
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connection Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-primary transform -translate-y-1/2 z-0" />
              
              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                {steps.map((step, index) => (
                  <Card 
                    key={index}
                    className="bg-white shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in border-border/50"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      {/* Step Number */}
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                        {index + 1}
                      </div>
                      
                      {/* Icon */}
                      <div className="flex justify-center mb-4">
                        {step.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-foreground">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Details */}
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-1 h-16 bg-gradient-primary" />
                )}
                
                <Card className="bg-white shadow-elegant border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Step Number */}
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {index + 1}
                      </div>
                      
                      <div className="flex-1">
                        {/* Icon & Title */}
                        <div className="flex items-center mb-3">
                          {step.icon}
                          <h3 className="text-xl font-bold ml-3 text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        
                        {/* Description */}
                        <p className="text-sm text-muted-foreground mb-4">
                          {step.description}
                        </p>
                        
                        {/* Details */}
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-white shadow-elegant border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                今すぐ始めませんか？
              </h3>
              <p className="text-muted-foreground mb-6">
                無料相談は随時受け付けております。お気軽にお問い合わせください。
              </p>
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  📞 お電話でのお問い合わせ: 03-1234-5678 (平日 9:00-18:00)
                </div>
                <div className="text-sm text-muted-foreground">
                  ✉️ メールでのお問い合わせ: info@ato-sns.com
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Flow;