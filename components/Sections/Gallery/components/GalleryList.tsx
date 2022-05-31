import React from 'react';
import Image from 'next/image';
import styles from '../Gallery.module.sass';
import GalleryListSection from './GalleryListSection';
import { GALLERY } from 'configs/constants';

type GalleryListProps = {
  data?: typeof GALLERY.sections;
  onClick: (a: number) => void;
};

const GalleryList = ({ data, onClick }: GalleryListProps) => {
  const [hover, setHover] = React.useState<boolean>(false);

  return (
    <div>
      {data?.map((section, i) => {
        return (
          <GalleryListSection key={`section${i}`}>
            <div className={`ref max-w-zhk_max w-full mx-auto flex flex-col pt-[143px]`}>
              <div className={`flex`}>
                <div className={`w-2/12 flex items-center justify-center pr-6`}>
                  <div
                    className={`cursor-pointer rounded-full border-2 ${
                      hover ? '' : ''
                    } border-[#52D8AF] w-full h-auto aspect-square flex items-center justify-center active:bg-[#52D8AF] active:scale-125 hover:bg-[#52D8AF] hover:scale-105 transition-all`}
                    onClick={() => onClick(i)}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    <svg
                      width='123'
                      height='123'
                      viewBox='0 0 123 123'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M118.195 56.6953H66.3047V4.80469C66.3047 2.15106 64.1536 0 61.5 0C58.8464 0 56.6953 2.15106 56.6953 4.80469V56.6953H4.80469C2.15106 56.6953 0 58.8464 0 61.5C0 64.1536 2.15106 66.3047 4.80469 66.3047H56.6953V118.195C56.6953 120.849 58.8464 123 61.5 123C64.1536 123 66.3047 120.849 66.3047 118.195V66.3047H118.195C120.849 66.3047 123 64.1536 123 61.5C123 58.8464 120.849 56.6953 118.195 56.6953Z'
                        fill={hover ? '#fff' : '#52D8AF'}
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className={`w-8/12 aspect-[1/0.7] h-auto relative cursor-pointer`}
                  onClick={() => onClick(i)}
                >
                  <Image
                    alt={'ЖК Космос'}
                    src={`/images/gallery/${section.images[0]}`}
                    layout={'fill'}
                    objectFit={'cover'}
                  />
                </div>
              </div>
              <div
                onClick={() => onClick(i)}
                className={styles.section_title + ` text-white text-center cursor-pointer`}
              >
                {section.title}
              </div>
            </div>
          </GalleryListSection>
        );
      })}
    </div>
  );
};

export default GalleryList;
