import React from 'react';
import Image from 'next/image';
import { SVGLocal } from './';

type Section01Props = {
  data: {
    title: string;
    left: string[];
    right: {
      text?: string | undefined;
      iframe?: string | undefined;
      images?: string[] | undefined;
    };
  };
  arrowClick: (a:string) => void
};

const Section01 = ({ data, arrowClick }: Section01Props) => {
  return (
    <div className={`w-full h-full relative`}>
      
      <div className={`w-full flex text-white`}>
        <div className={`w-1/3 aspect-[305/458] h-auto relative`}>
          <Image
            alt={'ЖК Космос'}
            src={`/images/${data.right.images?.[0]}`}
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>
        <div className={`w-1/2`}>{data.right.text}</div>
      </div>
      <div className={`w-3/4 aspect-[621/350] h-auto absolute bottom-0 right-0`}>
        <Image
          alt={'ЖК Космос'}
          src={`/images/${data.right.images?.[0]}`}
          layout={'fill'}
          objectFit={'cover'}
        />
      </div>
    </div>
  );
};

export default Section01;
