import { Button } from "@/components/ui/button";
import { TrendingUp, Users, PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              SNS運用で
              <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                ビジネスを加速
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90">
              プロフェッショナルなSNS運用代行で、あなたのブランドを次のレベルへ
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary-glow" />
              </div>
              <div className="text-3xl font-bold mb-2">8万</div>
              <div className="text-white/80">フォロワー達成</div>
              <div className="text-sm text-white/60 mt-1">わずか5ヶ月で</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <PlayCircle className="w-8 h-8 text-primary-glow" />
              </div>
              <div className="text-3xl font-bold mb-2">3,260万</div>
              <div className="text-white/80">動画視聴回数</div>
              <div className="text-sm text-white/60 mt-1">累計実績</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-primary-glow" />
              </div>
              <div className="text-3xl font-bold mb-2">600%</div>
              <div className="text-white/80">エンゲージメント向上</div>
              <div className="text-sm text-white/60 mt-1">平均成長率</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-glow"
            >
              無料相談を始める
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
            >
              実績を見る
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;