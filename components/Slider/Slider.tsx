import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Icons, Text } from 'components';
import { SLIDER } from 'configs/constants';

import styles from './Slider.module.sass';

type SliderProps = {
  banner: React.ReactNode;
};

const Slider = ({ banner }: SliderProps) => {
  const [curImg, setCurImg] = React.useState<number>(0);

  const handleArrowClick = (direction: string) => {
    if (direction === '<') {
      if (curImg !== 0) {
        setCurImg((s) => s - 1);
      } else {
        setCurImg(SLIDER.length - 1);
      }
    }
    if (direction === '>') {
      if (curImg !== SLIDER.length - 1) {
        setCurImg((s) => s + 1);
      } else {
        setCurImg(0);
      }
    }
  };

  const bannerWithNewProps = React.Children.map(banner, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { data: SLIDER[curImg] });
    }
    return child;
  });

  return (
    <div className={`relative flex w-full justify-center min-h-[80vh] h-1`}>
      {SLIDER.map((sliderContent, i: number) => {
        return (
          <motion.div animate={{ opacity: curImg === i ? 1 : 0 }} className={``} key={`image${i}`}>
            <Image
              alt={`ЖК Космос`}
              src={`/images/${sliderContent.image}`}
              objectFit='cover'
              layout='fill'
            ></Image>
          </motion.div>
        );
      })}
      <div className={`max-w-[1434px] w-full mx-auto flex justify-center items-end`}>
        <div className={`absolute max-w-[1434px] w-full h-full flex items-center`}>{bannerWithNewProps}</div>
        <div className={`relative z-50 w-5/12 h-20 flex gap-2`}>
          {SLIDER.map((___, i: number) => {
            return (
              <div
                key={`round${i}`}
                className={`shadow-xl rounded-full w-4 h-4 border-[2px] border-white ${
                  i === curImg ? `bg-white` : `bg-black`
                } `}
              ></div>
            );
          })}
        </div>
        <div className={`relative z-50 flex w-1/12 mb-8 min-h-[190px] zero:-ml-20 md:ml-0`}>
          <div
            className={`max-w-7xl self-end bg-white w-16 h-16 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 active:shadow-sm flex items-center justify-center cursor-pointer transition-all`}
            onClick={() => handleArrowClick('<')}
          >
            <Icons.ArrowLeft />
          </div>
          <div
            className={`bg-white self-end w-16 h-16 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 active:shadow-sm flex items-center justify-center cursor-pointer transition-all`}
            onClick={() => handleArrowClick('>')}
          >
            <Icons.ArrowRight />
          </div>
        </div>
        <div className={`relative z-50 flex w-6/12 mb-8 min-h-[190px] zero:-ml-20 md:ml-0`}>
          <div
            className={
              styles.blurry +
              ` zero:w-full lg:w-1/3 flex items-center justify-center relative text-[22px] font-bold text-white`
            }
          >
            <div className={`absolute right-0 top-0 mt-1 mr-2`}>{curImg + 1}</div>
            <Text className={` p-4`}>{SLIDER[curImg].adds.leftText}</Text>
          </div>
          <div
            className={`w-2/3 zero:hidden md:block flex flex-col items-center justify-center bg-white p-8`}
          >
            <Text className={styles.rightbannertitle + ` text-center pb-4`}>
              {SLIDER[curImg].adds.rightText.title}
            </Text>
            <Text className={styles.rightbannertext + ` text-center`}>
              {SLIDER[curImg].adds.rightText.text}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
