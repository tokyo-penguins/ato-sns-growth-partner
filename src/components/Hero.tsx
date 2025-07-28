import { Button } from "@/components/ui/button";
import { TrendingUp, Users, PlayCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/60" />
      {/* Floating Elements */}
      <div className="absolute top-20 left-4 md:left-10 w-16 h-16 md:w-32 md:h-32 bg-primary-glow/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-4 md:right-10 w-20 h-20 md:w-40 md:h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{
      animationDelay: "1s"
    }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              SNS運用で
              <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent block sm:inline">
                ビジネスを加速
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-white/90 px-2">
              プロフェッショナルなSNS運用代行で、あなたのブランドを次のレベルへ
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 animate-scale-in px-2" style={{
          animationDelay: "0.3s"
        }}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-primary-glow" />
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">8万</div>
              <div className="text-white/80 text-sm md:text-base">フォロワー達成</div>
              <div className="text-xs md:text-sm text-white/60 mt-1">わずか5ヶ月で</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <PlayCircle className="w-6 h-6 md:w-8 md:h-8 text-primary-glow" />
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">3,260万</div>
              <div className="text-white/80 text-sm md:text-base">動画視聴回数</div>
              <div className="text-xs md:text-sm text-white/60 mt-1">累計実績</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-primary-glow" />
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">500%</div>
              <div className="text-white/80 text-sm md:text-base">エンゲージメント向上</div>
              <div className="text-xs md:text-sm text-white/60 mt-1">平均成長率</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-slide-up px-2" style={{
          animationDelay: "0.6s"
        }}>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-glow">
              無料相談を始める
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold">
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
    </section>;
};
export default Hero;