import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, TrendingDown, Clock } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: <TrendingDown className="w-12 h-12 text-destructive" />,
      title: "フォロワーが増えない",
      description: "投稿しても反応が薄く、なかなかフォロワーが増えずに悩んでいませんか？効果的なコンテンツ戦略で確実に成長させます。",
      solution: "データ分析に基づいた戦略的投稿とターゲティングで、5ヶ月で8万フォロワー達成の実績があります。"
    },
    {
      icon: <Clock className="w-12 h-12 text-destructive" />,
      title: "運用に時間が取れない",
      description: "本業が忙しくてSNS運用まで手が回らない。質の高いコンテンツを継続的に投稿するのが困難ではありませんか？",
      solution: "完全代行サービスで、企画から投稿、分析まで全てお任せ。あなたは本業に集中できます。"
    },
    {
      icon: <AlertCircle className="w-12 h-12 text-destructive" />,
      title: "何を投稿すべきかわからない",
      description: "どんなコンテンツが効果的なのか、投稿のタイミングや頻度など、戦略が分からずに困っていませんか？",
      solution: "プロのコンテンツプランナーが業界分析と競合調査を基に、最適なコンテンツ戦略を立案します。"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            こんなお悩みを
            <span className="bg-gradient-primary bg-clip-text text-transparent">解決</span>
            します
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            多くの企業が抱えるSNS運用の課題を、私たちの専門的なサービスで解決いたします
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="h-full hover:shadow-elegant transition-all duration-300 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {problem.description}
                </p>
                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-lg">
                  <p className="text-sm font-medium text-primary">
                    ATOの解決策
                  </p>
                  <p className="text-sm text-foreground mt-2">
                    {problem.solution}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto border border-border/50">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              これらの悩みを今すぐ解決しませんか？
            </h3>
            <p className="text-muted-foreground mb-6">
              無料相談で、あなたのビジネスに最適なSNS戦略をご提案いたします
            </p>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-6">
              <p className="text-accent font-bold text-lg mb-2">
                🎁 特別特典
              </p>
              <p className="text-foreground">
                ご契約いただいた方には、<strong className="text-accent">20万円相当のWebサイト</strong>を無料でご提供！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;