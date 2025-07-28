import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    howDidYouKnow: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // メール本文を作成
    const subject = "お問い合わせ - ATOへのご相談";
    const body = `
お名前: ${formData.name}
会社名・団体名: ${formData.company}
メールアドレス: ${formData.email}
電話番号: ${formData.phone || "未記入"}
どこで知りましたか: ${formData.howDidYouKnow || "未記入"}

お問い合わせ内容:
${formData.message}
    `.trim();

    // mailto:リンクを作成
    const mailtoLink = `mailto:aaaaa2000@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // メールクライアントを開く
    window.location.href = mailtoLink;
    
    toast({
      title: "メールクライアントが開きます",
      description: "お問い合わせ内容がメールアプリに反映されます。",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            お問い合わせ
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            SNS運用に関するご相談やお見積もりなど、お気軽にお問い合わせください
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-center">お問い合わせフォーム</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">お名前 *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="山田太郎"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">会社名・団体名 *</Label>
                  <Input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="株式会社○○"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="example@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">電話番号（任意）</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="090-1234-5678"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">お問い合わせ内容 *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="お問い合わせ内容をご記入ください。ご希望のプランやご相談内容など"
                    rows={5}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="howDidYouKnow">どこで知りましたか？（任意）</Label>
                  <Select value={formData.howDidYouKnow} onValueChange={(value) => handleChange("howDidYouKnow", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google検索</SelectItem>
                      <SelectItem value="sns">各SNS</SelectItem>
                      <SelectItem value="friend">友人から</SelectItem>
                      <SelectItem value="other">その他</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-primary text-white hover:opacity-90">
                  お問い合わせを送信
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;