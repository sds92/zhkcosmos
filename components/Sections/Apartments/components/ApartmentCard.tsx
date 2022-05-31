import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ApartmentCardProps = {
  data: {
    id: string;
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
    <Link passHref href={`/apartments/${data.id}`}>
      <div
        className={`flex flex-col relative shadow-md my-2 cursor-pointer hover:scale-105 transition-all hover:shadow-sm `}
      >
        <div className={`relative w-full`}>
          <Image
            alt={``}
            src={data.images[0]}
            width={458}
            height={344}
            layout={'fixed'}
            objectFit={'cover'}
          />
        </div>
        <div className={`flex flex-col p-2`}>
          <div>{data.title}</div>
          <div>{data.subTitle}</div>
          <div className={`flex`}>
            {data.stations.map((station, i) => {
              return (
                <div key={`station${i}`} className={`flex items-center`}>
                  <div className={`rounded-full w-[8px] h-[8px] bg-[#ff0000]`}>{}</div>
                  <div className={`px-2`}>{station}</div>
                </div>
              );
            })}
          </div>
          <div>{data.address}</div>
          <div className={`flex`}>
            <div className={`w-1/2`}>{data.prices}₽</div>
            <div className={`w-1/2`}>{data.squarePrice}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ApartmentCard;
