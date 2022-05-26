import React from 'react';
import Image from 'next/image';
import { ShowAll } from './';
import styles from './ui.module.sass';

type SectionContentProps = {
  left?: boolean;
  data: {
    image: string;
    title: string;
  };
  children: React.ReactNode;
};

const SectionContent = ({ left = false, data, children }: SectionContentProps) => {
  return (
    <div className={` w-full bg-[#1A222B]`}>
      <div className={`flex max-w-zhk_max mx-auto`}>
        <div className={`${left ? 'w-5/12 order-2 pl-4' : 'w-5/12 order-1 pr-4'} min-h-full flex flex-col justify-end`}>
          {children}
          <ShowAll href={''} text={`Все ${data.title.toLowerCase()}`} />
        </div>
        <div className={`${left ? 'w-7/12 order-1' : 'pl-4 w-7/12 order-2'} relative max-h-[549px]`}>
          <Image width={824} height={549} alt={`ЖК Космос`} src={`/images/${data.image}`} layout='fixed' />
        </div>
      </div>
    </div>
  );
};

export default SectionContent;
