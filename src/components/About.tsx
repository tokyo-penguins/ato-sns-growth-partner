import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, TrendingUp, Heart } from "lucide-react";
import daihyou from "@/assets/daihyou.jpg";

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "業界歴15年",
      description: "デジタルマーケティング領域での豊富な経験"
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: "100社以上",
      description: "多業種にわたるSNS運用実績"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: "平均成長率600%",
      description: "クライアントのフォロワー数向上実績"
    },
    {
      icon: <Heart className="w-6 h-6 text-destructive" />,
      title: "顧客満足度98%",
      description: "継続率の高いサービス品質"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            代表
            <span className="bg-gradient-primary bg-clip-text text-transparent">挨拶</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            あなたのビジネスの成功を心から願い、全力でサポートいたします
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="shadow-elegant border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* CEO Photo */}
                <div className="relative">
                  <img 
                    src={daihyou}
                    alt="ATO代表取締役"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Message Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      田中 太郎
                    </h3>
                    <p className="text-primary font-semibold">
                      株式会社ATO 代表取締役
                    </p>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      はじめまして。株式会社ATO代表の田中と申します。
                    </p>
                    <p>
                      私たちは、SNSマーケティングの力で日本の企業様の成長を支援することをミッションとしています。デジタル時代において、SNSは単なる情報発信ツールではなく、顧客との深いつながりを築く重要な資産です。
                    </p>
                    <p>
                      これまで100社以上の企業様のSNS運用をお手伝いし、数多くの成功事例を創り出してまいりました。5ヶ月で8万フォロワー達成、3,260万回の動画視聴数など、数字が証明する確かな実績があります。
                    </p>
                    <p>
                      私たちが大切にしているのは、単なる数字の向上だけではありません。お客様のブランド価値を高め、真のファンを育成し、持続可能な成長を実現することです。
                    </p>
                    <p className="font-semibold text-foreground">
                      あなたのビジネスの成功が、私たちの最大の喜びです。一緒に素晴らしい未来を創造しましょう。
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="text-right">
                      <div className="text-lg font-bold text-foreground">田中 太郎</div>
                      <div className="text-sm text-muted-foreground">株式会社ATO 代表取締役</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-elegant transition-all duration-300 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <h4 className="font-bold text-foreground mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Company Philosophy */}
          <div className="mt-16">
            <Card className="bg-gradient-subtle border-border/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  企業理念
                </h3>
                <blockquote className="text-lg text-muted-foreground italic leading-relaxed max-w-3xl mx-auto">
                  "SNSを通じて人と人をつなぎ、ビジネスと顧客の間に価値ある関係性を築く。
                  それが私たちの使命であり、日本のデジタル社会の発展に貢献することが私たちの誇りです。"
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;