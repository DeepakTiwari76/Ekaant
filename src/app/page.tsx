import homepageData from '../data/homepage.json';
import HeroSection from '../components/HeroCarousel';
import IntroSection from '@/components/IntroSection.jsx'; // Add this import
import OfferingsSection from '@/components/OfferingsSection'
import ReachSection from '@/components/ReachSection'
import FaqSection from '@/components/FaqSection'

export default async function Home() {
  const data = homepageData;

  return (
    <>
      <HeroSection hero={data.hero} />
      
      {/* Add the new component here, passing the intro data */}
      <IntroSection intro={data.intro} />

       {/* Add the new component here, passing the offerings data */}
      <OfferingsSection offerings={data.offerings} />
       {/* Add the new component here, passing the reach data */}
      <ReachSection reach={data.reach} />
      <FaqSection faq={data.faq} />

    </>
  );
}