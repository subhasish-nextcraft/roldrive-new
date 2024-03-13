import Everyday from 'section/home/Everyday';
import Footer from 'section/home/Footer';
import Hero from 'section/home/Hero';
import Mobile from 'section/home/Mobile';
import Support from 'section/home/Support';
import Surplus from 'section/home/SurPlus';

export default function page() {
  return (
    <div className="">
      <Hero />
      <div className="pb-14">
        <Surplus />
      </div>
      <Everyday />
      <div className="py-12 md:py-20">
        <Mobile />
      </div>
      <Support />
      <Footer />
    </div>
  );
}
