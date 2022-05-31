import React from 'react';
import Image from 'next/image';

import { SectionTitle, Text } from 'components';
import { QueryContainer, GalleryList, GallerySlider } from './components';
import { GALLERY } from 'configs/constants';

import styles from './Gallery.module.sass';

type GalleryProps = {};

const Gallery = ({}: GalleryProps) => {
  const [isSlider, setIsSlider] = React.useState<boolean | number>(false);
  

  return (
    <section className={`w-full cursor-default`}>
      <SectionTitle title={GALLERY.title} bg bc={['Главная', 'Галерея']} />
      <div className={`flex flex-col relative bg-[#1a222b] text-white min-h-screen h-full pb-10`}>
        <QueryContainer>
          {typeof isSlider === 'number' ? (
            <GallerySlider section={isSlider} switchOff={() => setIsSlider(false)} />
          ) : (
            <GalleryList
              onClick={(a: number) => {
                setIsSlider(a);
              }}
            />
          )}
        </QueryContainer>
      </div>
    </section>
  );
};

export default Gallery;
