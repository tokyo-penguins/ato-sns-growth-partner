import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Results from "@/components/Results";
import WebsiteShowcase from "@/components/WebsiteShowcase";
import Pricing from "@/components/Pricing";
import Flow from "@/components/Flow";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <Results />
      <WebsiteShowcase />
      <Pricing />
      <Flow />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
