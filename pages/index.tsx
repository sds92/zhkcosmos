import type { NextPage } from 'next';
import { Slider, BannerM0, Sections } from 'components';

const Home: NextPage = () => {
  return (
    <>
      <Sections.TopScreener>
        <Slider banner={<BannerM0 />} />
      </Sections.TopScreener>
      <Sections.AboutHome />
      <Sections.News />
      <Sections.Sales />
      <Sections.MortgageHome />
      <Sections.FotoGallery />
      <Sections.VirtualTour />
      <Sections.Apartments />
    </>
  );
};

export default Home;
