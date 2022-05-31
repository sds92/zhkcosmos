import Image from 'next/image';
import React from 'react';
import styles from '../Mortgage.module.sass';

type MortgageListProps = {
  data?: {
    id: string;
    title: string;
    maxDuration: number;
    initialFee: number;
    rate: string;
    image: string;
  }[];
};

const MortgageList = ({ data }: MortgageListProps) => {
  return (
    <div>
      {data?.map((dataItem, i) => {
        return (
          <div key={`mortgage${i}`} className={`flex w-full relative py-1.5 max-h-[127px] overflow-hidden`}>
            <div className={`relative w-[20%] h-min aspect-[114/86] px-9`}>
              <Image
                src={dataItem.image}
                alt={``}
                width={114}
                height={86}
                layout={'responsive'}
                objectFit={'contain'}
              />
            </div>
            <div className={`relative w-full max-w-[20%] bg-[#52d8af] flex flex-col justify-between p-4`}>
              <div className={`${styles.program_section_title}`}>Ставка</div>
              <div className={`${styles.program_section_value}`}>{dataItem.rate}%</div>
            </div>
            <div className={`relative w-full max-w-[20%] bg-[#349778] flex flex-col justify-between p-4`}>
              <div className={`${styles.program_section_title}`}>Первоначальный взнос</div>
              <div className={`${styles.program_section_value}`}>{dataItem.initialFee}</div>
            </div>
            <div className={`relative w-full max-w-[20%] bg-[#52d8af] flex flex-col justify-between p-4`}>
              <div className={`${styles.program_section_title}`}>Срок до</div>
              <div className={`${styles.program_section_value}`}>{dataItem.maxDuration}</div>
            </div>
            <div className={`relative w-full max-w-[20%] bg-[#349778] flex flex-col justify-between p-4`}>
              <div className={`${styles.program_section_title}`}>Ежемесячный платёж, руб.</div>
              <div className={`${styles.program_section_value}`}>{dataItem.rate}</div>
            </div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
};

export default MortgageList;
