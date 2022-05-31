import React from 'react';
import Image from 'next/image';
import styles from '../Gallery.module.sass';

type ImagesRollProps = {
  data: string[] | undefined;
  onClick: (a:number) => void;
  curImage: number;
};

const ImagesRoll = ({ data, onClick, curImage }: ImagesRollProps) => {
  return (
    <div className={`flex w-full justify-center h-[20%] pt-4`}>
      {data?.map((image, i) => {
        return (
          <div
            key={`image${i}`}
            className={`h-full ${data.length <= 4 ? 'w-full max-w-sm' : 'w-1/4'} ${
              i !== 0 && i !== data.length - 1 ? 'mx-4' : ''
            } ${curImage === i ? `scale-125 z-50 ${styles.images_roll_shadow}` : ''} relative overflow-hidden cursor-pointer transition-all`}
            onClick={() => onClick(i)}
          >
              {curImage !== i && <div className={`absolute z-40 inset-0 bg-black opacity-50 hover:opacity-10`}></div>}
            <Image alt={image} src={`/images/gallery/${image}`} layout={'fill'} objectFit={'cover'} />
          </div>
        );
      })}
    </div>
  );
};

export default ImagesRoll;
