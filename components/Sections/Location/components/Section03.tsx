import Image from 'next/image';
import React from 'react';

type Section03Props = {
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

const Section03 = ({ data }: Section03Props) => {
  return (
    <div className={`w-full flex h-full text-white`}>
      <div className={`w-full h-full flex relative items-center`}>
        <div className={`w-auto aspect-[336/223] h-1/3 relative ml-8`}>
          <Image
            alt={'ЖК Космос'}
            src={`/images/${data.right.images?.[0]}`}
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>
        <div className={`w-[45%] relative self-start mt-[30%] px-4`}>{data.right.text}</div>
        <div className={`w-[60%] aspect-[458/308] h-auto absolute bottom-8 left-[20%]`}>
          <Image
            alt={'ЖК Космос'}
            src={`/images/${data.right.images?.[1]}`}
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>
      </div>
      <div className={`w-2/3 aspect-[638/628] h-auto absolute right-0 bottom-0 -mr-[31vw]`}>
        <Image
          alt={'ЖК Космос'}
          src={`/images/${data.right.images?.[2]}`}
          layout={'fill'}
          objectFit={'cover'}
        />
      </div>
    </div>
  );
};

export default Section03;
