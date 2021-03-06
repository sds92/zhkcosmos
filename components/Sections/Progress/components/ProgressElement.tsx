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
  onClick: () => void
};

const ProgressElement = ({ data, i, onClick }: ProgressElementProps) => {
  const [hover, setHover] = React.useState<boolean>(false);
  return (
    <div
      key={`element${i}`}
      className={`flex flex-col lg:w-[20vw] sm:w-[40vw] h-[350px] cursor-pointer`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <div className={`relative w-full grow`}>
        <div className={`absolute w-full  ${hover ? 'aspect-[336/261]' : 'aspect-[336/163]'} overflow-hidden bottom-0 transition-all`}>
          <div className={`absolute aspect-[336/261] w-full h-auto bottom-0`}>
            <Image src={`/images/${data.image}`} alt={``} layout={'fill'} objectFit={'contain'} />
          </div>
        </div>
      </div>
      <div className={`${styles.el_title} py-4 ${hover ? ' text-[#52d8af]' : 'text-black'} transition-all`}>{data.title}</div>
      <div className={`${styles.el_text}`}>{data.text}</div>
    </div>
  );
};

export default ProgressElement;
