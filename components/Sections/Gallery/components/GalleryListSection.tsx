import React from 'react';
import Image from 'next/image';
import styles from '../Gallery.module.sass';

import { GALLERY } from 'configs/constants';

type GalleryListProps = {
  children: React.ReactNode;
};

const GalleryListSection = ({ children }: GalleryListProps) => {
  // const sliderRef = React.useRef<HTMLDivElement>(null);
  // const [curH, setCurH] = React.useState<number | undefined>(undefined);
//   console.log('🚀 ~ file: GalleryListSection.tsx ~ line 14 ~ GalleryListSection ~ curH', curH);
  //   console.log('🚀 ~ file: GalleryList.tsx ~ line 15 ~ GalleryList ~ sliderRefs', sliderRef.current);

  // React.useEffect(() => {
  //   let h = window.innerHeight;

  //   window.onscroll = () => {
  //     if (!sliderRef.current) throw Error('divRef is not assigned');
  //     let rect = sliderRef.current.getBoundingClientRect();
  //     setCurH(rect.top);
  //     sliderRef.current.style.opacity = rect.top.toFixed(1)
  //     console.log("🚀 ~ file: GalleryListSection.tsx ~ line 25 ~ React.useEffect ~ rect.top.toFixed(1)", rect.top.toFixed(1)/1000)
  //   };
  // }, []);

  return <div>{children}</div>;
};

export default GalleryListSection;
