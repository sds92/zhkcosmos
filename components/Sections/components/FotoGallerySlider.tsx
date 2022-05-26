import React from 'react';
import Image from 'next/image';
import { LocalSvg } from './';
import { motion } from 'framer-motion';

const classNames = {
  motionDiv: `border shadow-xl grow z-10 relative flex items-center justify-center`,
  arrowsBox: `absolute p-4  z-50 w-[170px] h-[140px] flex flex-col bg-[#52D8AF] -right-28 shadow-md bg-opacity-90`,
  arrow: `drop-shadow hover:drop-shadow-xl active:drop-shadow-sm hover:scale-105 active:scale-95 cursor-pointer transition-all`,
};

type FotoGallerySliderProps = {
  data?: {
    title: string;
    path: string;
  }[];
};

const FotoGallerySlider = ({ data }: FotoGallerySliderProps) => {
  const [curImage, setCurImage] = React.useState<number>(0);
  const [animate, setAnimate] = React.useState<boolean>(true);
  const handleArrowClick = (direction: string) => {
    switch (curImage) {
      case 0: {
        direction === '<' ? setCurImage((data?.length || 0) - 1) : setCurImage((s) => (s += 1));
        setAnimate(true);

        break;
      }
      case (data?.length || 1) - 1: {
        direction === '>' ? setCurImage(0) : setCurImage((s) => (s -= 1));
        setAnimate(true);
        break;
      }
      default: {
        direction === '>' ? setCurImage((s) => (s += 1)) : setCurImage((s) => (s -= 1));
        setAnimate(true);
        break;
      }
    }
  };

  return (
    <motion.div className={classNames.motionDiv} animate={{ opacity: animate ? 1 : 0 }}>
      <div className={classNames.arrowsBox}>
        <LocalSvg.FotoGallerySliderArrowLeft
          className={classNames.arrow}
          onClick={() => {
            setAnimate(false);
            setTimeout(() => {
              handleArrowClick('<');
            }, 500);
          }}
        />
        <LocalSvg.FotoGallerySliderArrowRight
          className={classNames.arrow}
          onClick={() => {
            setAnimate(false);
            setTimeout(() => {
              handleArrowClick('>');
            }, 500);
          }}
        />
      </div>
      <Image
        alt={data?.[curImage].title}
        src={data?.[curImage].path || ''}
        width={1434}
        height={956}
        layout={'fill'}
        objectFit={'cover'}
      />
    </motion.div>
  );
};
export default FotoGallerySlider;
