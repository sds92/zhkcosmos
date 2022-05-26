import React from 'react';
import { Text, SectionTitle, QueryContainers } from 'components';
import FotoGallerySlider from './components/FotoGallerySlider';
import { FOTOGALLERY } from 'configs/constants';

type FotoGalleryProps = {};

const FotoGallery = ({}: FotoGalleryProps) => {
  return (
    <section className={`min-h-screen pb-8 flex flex-col w-full`}>
      <SectionTitle title={FOTOGALLERY.title} />
      <div className={`relative max-w-zhk_max mx-auto flex flex-col min-h-full w-full grow`}>
        {['-top-2 -left-2', '-top-2 -right-2', '-bottom-2 -left-2', '-bottom-2 -right-2'].map((square, i) => (
          <div key={`square${i}`} className={`absolute ${square} bg-[#1a222b] w-[180px] h-[132px]`}></div>
        ))}
        <div className={`absolute w-full h-full bg-white`}></div>
        <QueryContainers.FotoGallery>
          <FotoGallerySlider />
        </QueryContainers.FotoGallery>
      </div>
    </section>
  );
};

export default FotoGallery;
