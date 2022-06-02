import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LocalSVG, ImagesRoll } from './';
import { useScrollLock } from 'utils/disableScroll';
import { GALLERY } from 'configs/constants';
import styles from '../Progress.module.sass';

const classNames = {
  motionDiv: `max-w-zhk_max shadow-xl z-10 relative flex items-center justify-center mx-auto w-full h-[80%]`,
  arrowsBox: `absolute p-4  z-50 w-[170px] h-[140px] flex flex-col bg-[#52D8AF] -right-28 shadow-md bg-opacity-90`,
  arrow: `drop-shadow hover:drop-shadow-xl active:drop-shadow-sm hover:scale-105 active:scale-95 cursor-pointer transition-all`,
  close: `absolute z-50 bg-white rounded-full w-[52px] h-[52px] top-6 right-6 flex items-center justify-center cursor-pointer hover:scale-105 transition-all shadow-md hover:shadow-xl`,
  title: styles.slider_title + ` z-50 absolute left-0 top-[40%]`,
};

type ProgressSliderProps = {
    data?: {
        title: string;
        images: string[];
    }[];
    section: number;
    switchOff: () => void;
}

const ProgressSlider = ({data, section, switchOff}: ProgressSliderProps) => {
    const [curImage, setCurImage] = React.useState<number>(0);
    const [animate, setAnimate] = React.useState<boolean>(true);
    const { lockScroll, unlockScroll } = useScrollLock();
  
    const handleArrowClick = (direction: string) => {
      if (data?.[section as number].images.length === 1) {
        setAnimate(true);
        return;
      }
      switch (curImage) {
        case 0: {
          direction === '<'
            ? setCurImage((data?.[section as number].images.length || 0) - 1)
            : setCurImage((s) => (s += 1));
          setAnimate(true);
          break;
        }
        case (data?.[section as number].images.length || 1) - 1: {
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
  
    React.useEffect(() => {
      lockScroll();
      return () => unlockScroll();
    }, []);
  
    return (
      <div className={'fixed w-screen inset-0 z-[100] bg-[#1a222b] p-4'}>
        <div className={classNames.title}>{data?.[section as number].title}</div>
        <motion.div className={classNames.motionDiv} animate={{ opacity: animate ? 1 : 0 }}>
          <div
            className={classNames.close}
            onClick={() => {
              switchOff();
            }}
          >
            <LocalSVG.Close
              className={`drop-shadow hover:drop-shadow-xl active:drop-shadow-sm transition-all`}
            />
          </div>
          <div className={classNames.arrowsBox}>
            <LocalSVG.FotoGallerySliderArrowLeft
              className={classNames.arrow}
              onClick={() => {
                setAnimate(false);
                setTimeout(() => {
                  handleArrowClick('<');
                }, 500);
              }}
            />
            <LocalSVG.FotoGallerySliderArrowRight
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
            alt={data?.[section as number].images[curImage] || ''}
            src={`/images/gallery/${data?.[section as number].images[curImage]}` || ''}
            layout={'fill'}
            objectFit={'cover'}
          />
        </motion.div>
        <ImagesRoll
          onClick={(a: number) => {
            setAnimate(false);
            setTimeout(() => {
              setCurImage(a);
              setAnimate(true);
            }, 500);
          }}
          data={data?.[section as number].images}
          curImage={curImage}
        />
      </div>
    );
}

export default ProgressSlider