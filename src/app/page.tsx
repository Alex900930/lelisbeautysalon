import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Historia from '@/components/Historia';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Historia />
      <Testimonials />
      <Footer />
    </div>
  );
}
