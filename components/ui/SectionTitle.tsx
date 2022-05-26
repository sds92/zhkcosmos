import Image from 'next/image';
import React from 'react';
import styles from './ui.module.sass';

type SectionTitleProps = {
  title: string;
  bc?: string[];
  bg?: boolean;
};

const SectionTitle = ({ title = '', bc, bg }: SectionTitleProps) => {
  return (
    <div
      className={
        styles.sectionTitle +
        ` relative -mt-6  cursor-default`
      }
    >
      <div className={`max-w-zhk_max mx-auto w-full flex justify-between`}>
        <h1 className={bg ? 'text-white' : ''}>{title}</h1>
        {bc && (
          <div className={styles.bc + ` flex items-center`}>
            {bc.map((item, i) => {
              return (
                <React.Fragment key={`item${i}`}>
                  <div
                    className={`cursor-pointer px-2 ${
                      i === bc.length - 1
                        ? `${bg ? 'text-white' : 'text-[#C4C4C4]'}`
                        : `${bg ? 'text-black' : ''}`
                    }`}
                  >
                    {item}
                  </div>
                  {i !== bc.length - 1 && '>'}
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>
      {bg && (
        <div className={`absolute -z-10 left-0 w-screen bottom-0`}>
          <Image
            alt={'ЖК Космос'}
            src={`/images/titleImg01.webp`}
            width={1920}
            height={290}
            layout={'responsive'}
            objectFit={'cover'}
          />
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
