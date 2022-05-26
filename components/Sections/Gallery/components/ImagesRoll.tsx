import React from 'react';
import Image from 'next/image';

type ImagesRollProps = {
  data: string[] | undefined;
  onClick: (a:number) => void;
};

const ImagesRoll = ({ data, onClick }: ImagesRollProps) => {
  return (
    <div className={`flex w-full h-[20vh] pt-4`}>
      {data?.map((image, i) => {
        return (
          <div
            key={`image${i}`}
            className={`h-full ${data.length <= 4 ? 'w-full' : 'w-1/4'} ${
              i !== 0 && i !== data.length - 1 ? 'mx-4' : ''
            } relative overflow-hidden cursor-pointer`}
            onClick={() => onClick(i)}
          >
            <Image alt={image} src={`/images/gallery/${image}`} layout={'fill'} objectFit={'cover'} />
          </div>
        );
      })}
    </div>
  );
};

export default ImagesRoll;
