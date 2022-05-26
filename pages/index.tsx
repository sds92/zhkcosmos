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
      <Sections.Mortgage />
      <Sections.FotoGallery />
      <Sections.VirtualTour />
      <Sections.ApartmentsSM />
    </>
  );
};

export default Home;
