import React from 'react';
import Image from 'next/image';
import styles from '../Progress.module.sass';
type ProgressElementProps = {
  data: {
    title: string;
    text: string;
    image: string;
  };
  i: number;
};

const ProgressElement = ({ data, i }: ProgressElementProps) => {



  return (
    <div key={`element${i} flex flex-col`}>
      <div className={`relative w-auto h-[163px] aspect-[336/163]`}>
        <Image src={`/images/${data.image}`} alt={``} layout={'fill'} objectFit={'contain'} />
      </div>
      <div className={`${styles.el_title} py-4`}>{data.title}</div>
      <div className={`${styles.el_text}`}>{data.text}</div>
    </div>
  );
};

export default ProgressElement;
