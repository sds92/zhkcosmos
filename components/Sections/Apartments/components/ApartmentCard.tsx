import React from 'react';
import Image from 'next/image';

type ApartmentCardProps = {
  data: {
    title: string;
    subTitle: string;
    stations: string[];
    address: string;
    prices: number;
    squarePrice: number;
    images: string[];
  };
};

const ApartmentCard = ({ data }: ApartmentCardProps) => {
  return (
    <div className={`flex flex-col`}>
      <div className={`relative w-full h-max`}>
        <Image alt={``} src={data.images[0]} width={458} height={344} layout={'fixed'} objectFit={'cover'} />
      </div>
      <div>{data.title}</div>
      <div>{data.subTitle}</div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ApartmentCard;