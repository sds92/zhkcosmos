import React from 'react';
import Image from 'next/image';
type SalesViewerProps = {
  data?: { id: string; title: string; date: string; image: string; text: string }[];
  id: string;
};

const SalesViewer = ({ data, id }: SalesViewerProps) => {
  const _data = data?.find((item) => item.id === id);
  return (
    <div className={`max-w-zhk_max w-full mx-auto`}>
      <div>{_data?.title}</div>
      <div>{_data?.date}</div>
      <div className={`relative aspect-[1434/378] w-full h-auto bottom-0`}>
        <Image src={`/images/${_data?.image}`} alt={``} layout={'fill'} objectFit={'cover'} />
      </div>
      <div>{_data?.text}</div>
    </div>
  );
};

export default SalesViewer;
