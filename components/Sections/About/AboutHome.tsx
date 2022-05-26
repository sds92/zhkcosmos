import React from 'react';
import Image from 'next/image';
import { ABOUT_HOMEPAGE } from 'configs/constants';
import { Text } from 'components';
import styles from './About.module.sass';

type AboutHomeProps = {
  //   children: React.ReactNode;
};

const AboutHome = ({}: AboutHomeProps) => {
  return (
    <section className={'relative w-full pb-8'}>
      {ABOUT_HOMEPAGE.map((section, i) => {
        switch (i) {
          case 0: {
            return (
              <React.Fragment key={`about${i}`}>
                <div className={`w-full flex h-[630px] max-w-zhk_max mx-auto`}>
                  <div className={`flex flex-col w-1/2`}>
                    <Text className={styles['about-m0-title']}>{section.title}</Text>
                    <Text className={styles['about-m0-text'] + ` pr-4`}>{section?.text || ''}</Text>
                  </div>
                  {/* <div className={`w-1/2`}></div> */}
                </div>
                <div className={`absolute -top-8 right-0 w-1/2 min-h-[630px]`}>
                  <Image
                    alt={`ЖК Космос`}
                    src={`/images/${section.images?.[0]}`}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </React.Fragment>
            );
          }
          case 1: {
            return (
              <div key={`about${i}`} className={`w-full flex flex-col max-w-zhk_max mx-auto`}>
                <Text className={styles['about-m0-title']}>{section.title}</Text>
                <div className={`relative w-full min-h-[630px] mt-4`}>
                  <Image
                    alt={`ЖК Космос`}
                    src={`/images/${section.video?.[0]}`}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>

                {/* <div className={`w-1/2`}></div> */}
              </div>
            );
          }
          case 2: {
            return (
              <React.Fragment key={`about${i}`}>
                <div className={`w-full flex max-w-zhk_max mx-auto`}>
                  <div className={`flex flex-col w-1/2`}>
                    <Text className={styles['about-m0-title']}>{section.title}</Text>
                    <Text className={styles['about-m0-text'] + ` pr-4`}>{section?.text || ''}</Text>
                  </div>
                  {/* <div className={`w-1/2`}></div> */}
                </div>
                <div className={`h-[408px] mt-4 relative w-full`}>
                  <div className={`h-full w-screen absolute flex`}>
                    {section.images?.map((image, ii) => {
                      return (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={`image${ii}`}
                          className={`h-full w-auto`}
                          alt={`ЖК Космос`}
                          src={`/images/${image}`}
                        />
                      );
                    })}
                  </div>
                </div>
                <div
                  className={`relative w-full flex justify-center items-center bg-[#52D8AF] overflow-hidden py-[10px]`}
                >
                  {section.blocks?.map((block, ii) => {
                    return (
                      <div key={`block${ii}`} className={`px-12 pt-2 ${ii === 1 ? 'border-x-2' : ''}`}>
                        <Text className={styles['about-m2-title'] + ` text-center`}>{block.title}</Text>
                        <Text className={styles['about-m2-text'] + ` pt-2 pb-4 text-center`}>{block.text}</Text>
                      </div>
                    );
                  })}
                </div>
              </React.Fragment>
            );
          }
          default:
            break;
        }
        return null;
      })}
    </section>
  );
};

export default AboutHome;
