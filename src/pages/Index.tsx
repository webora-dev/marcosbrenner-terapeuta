import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import TrustBlock from '@/components/landing/TrustBlock';
import About from '@/components/landing/About';
import Services from '@/components/landing/Services';
import Marriage from '@/components/landing/Marriage';
import HowItWorks from '@/components/landing/HowItWorks';
import Disclaimer from '@/components/landing/Disclaimer';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';
import WhatsAppButton from '@/components/landing/WhatsAppButton';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBlock />
      <About />
      <Services />
      <Marriage />
      <HowItWorks />
      <Disclaimer />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
