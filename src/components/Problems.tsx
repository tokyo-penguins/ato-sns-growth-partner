import { Card, CardContent } from "@/components/ui/card";
import problem1 from "@/assets/problem1.jpg";
import problem2 from "@/assets/problem2.jpg";

const Problems = () => {
  const problems = [{
    image: problem1,
    title: "フォロワーが増えない",
    description: "投稿しても反応が薄く、なかなかフォロワーが増えずに悩んでいませんか？効果的なコンテンツ戦略で確実に成長させます。",
    solution: "データ分析に基づいた戦略的投稿とターゲティングで、5ヶ月で8万フォロワー達成の実績があります。"
  }, {
    image: problem2,
    title: "運用に時間が取れない",
    description: "本業が忙しくてSNS運用まで手が回らない。質の高いコンテンツを継続的に投稿するのが困難ではありませんか？",
    solution: "完全代行サービスで、企画から投稿、分析まで全てお任せ。あなたは本業に集中できます。"
  }, {
    image: problem1,
    title: "何を投稿すべきかわからない",
    description: "どんなコンテンツが効果的なのか、投稿のタイミングや頻度など、戦略が分からずに困っていませんか？",
    solution: "プロのコンテンツプランナーが業界分析と競合調査を基に、最適なコンテンツ戦略を立案します。"
  }];
  return <section id="problems" className="py-12 md:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            こんなお悩みを
            <span className="bg-gradient-primary bg-clip-text text-transparent">解決</span>
            します
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            多くの企業が抱えるSNS運用の課題を、私たちの専門的なサービスで解決いたします
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => <Card key={index} className="h-full hover:shadow-elegant transition-all duration-300 animate-fade-in border-border/50" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <CardContent className="p-6 md:p-8">
                <div className="flex justify-center mb-6">
                  <img 
                    src={problem.image} 
                    alt={problem.title}
                    className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full shadow-lg"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-4 text-foreground text-center">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-center text-sm md:text-base">
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
            </Card>)}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          
        </div>
      </div>
    </section>;
};
export default Problems;