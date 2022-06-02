import React from 'react';
import Image from 'next/image';
import { SVGLocal } from './';

type Section02Props = {
  data: {
    title: string;
    left: string[];
    right: {
      text?: string | undefined;
      iframe?: string | undefined;
      images?: string[] | undefined;
    };
  };
};

const Section02 = ({ data }: Section02Props) => {
  return (
    <div className={`w-full h-full relative`}>
      <div className={`w-full flex h-full text-white`}>
        <div className={`w-1/2 aspect-[804/751] h-full relative`}>
          <Image
            alt={'ЖК Космос'}
            src={`/images/${data.right.images?.[0]}`}
            layout={'fill'}
            objectFit={'cover'}
            objectPosition={'right'}
          />
        </div>
        <div className={`w-1/2 relative flex flex-col justify-center gap-20 items-end`}>
          <div className={`w-[80%] aspect-[335/252] h-auto relative`}>
            <Image
              alt={'ЖК Космос'}
              src={`/images/${data.right.images?.[1]}`}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className={`pl-8`}>{data.right.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Section02;
