import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, PlayCircle, Heart, MessageCircle, Share2 } from "lucide-react";

const Results = () => {
  // Simulated growth data for the chart
  const chartData = [
    { month: "開始", followers: 2000, views: 50000 },
    { month: "1ヶ月", followers: 15000, views: 200000 },
    { month: "2ヶ月", followers: 28000, views: 450000 },
    { month: "3ヶ月", followers: 45000, views: 800000 },
    { month: "4ヶ月", followers: 65000, views: 1200000 },
    { month: "5ヶ月", followers: 80000, views: 1600000 }
  ];

  return (
    <section id="results" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            圧倒的な
            <span className="bg-gradient-primary bg-clip-text text-transparent">実績</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            数字が証明する、ATOのSNS運用代行の実力
          </p>
        </div>

        {/* Main Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-primary text-white border-0 shadow-glow animate-scale-in">
            <CardContent className="p-8 text-center">
              <Users className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <div className="text-5xl font-bold mb-2">8万</div>
              <div className="text-xl mb-2">フォロワー達成</div>
              <div className="text-white/80">わずか5ヶ月という短期間で達成</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent to-accent/80 text-white border-0 shadow-glow animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8 text-center">
              <PlayCircle className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <div className="text-5xl font-bold mb-2">3,260万</div>
              <div className="text-xl mb-2">動画視聴回数</div>
              <div className="text-white/80">累計動画視聴数の実績</div>
            </CardContent>
          </Card>
        </div>

        {/* Growth Chart Visualization */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="shadow-elegant border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
                フォロワー成長グラフ（5ヶ月間）
              </h3>
              
              {/* Custom Chart */}
              <div className="relative">
                <div className="flex items-end justify-between h-64 bg-gradient-subtle rounded-lg p-6">
                  {chartData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center w-full">
                      <div 
                        className="bg-gradient-primary rounded-t-lg mb-2 transition-all duration-1000 animate-slide-up"
                        style={{ 
                          height: `${(data.followers / 80000) * 200}px`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      />
                      <div className="text-xs font-medium text-muted-foreground mb-1">
                        {data.followers.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {data.month}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Growth Arrow */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center text-primary">
                    <TrendingUp className="w-6 h-6 mr-2" />
                    <span className="font-bold">+3,900% 成長</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Metrics */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-elegant transition-all duration-300 border-border/50">
            <CardContent className="p-6">
              <Heart className="w-12 h-12 text-destructive mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">4.8M</div>
              <div className="text-muted-foreground">累計いいね数</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-elegant transition-all duration-300 border-border/50">
            <CardContent className="p-6">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">850K</div>
              <div className="text-muted-foreground">エンゲージメント数</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-elegant transition-all duration-300 border-border/50">
            <CardContent className="p-6">
              <Share2 className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">320K</div>
              <div className="text-muted-foreground">シェア数</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Results;