import React from 'react';
import type { SliderContent } from 'configs/constants';
import { Text } from 'components';
import styles from './Banners.module.sass'

type BannerProps = {
  data?: SliderContent;
};

const Banner = ({ data }: BannerProps) => {
  return (
    <article className={'relative z-50 text-white'}>
      <Text className={styles.m0title}>{data?.title || ''}</Text>
      <Text className={styles.m0subtitle}>{data?.subTitle || ''}</Text>
      <Text className={styles.m0price}>{data?.price || ''}</Text>
      <div className={styles.m0button + ` px-20 py-2 w-min whitespace-nowrap max-w-1/4 shadow-md cursor-pointer zero:-translate-y-12 md:translate-y-0`}>
        Выбрать квартиру
      </div>
    </article>
  );
};

export default Banner;

