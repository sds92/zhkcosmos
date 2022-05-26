import React from 'react';
import Image from 'next/image';

import { SectionTitle, Text } from 'components';
import ShowMore from './components/ShowMore';
import LocalSVG from './components/local.svg';

import { ABOUT_PAGE } from 'configs/constants';

import styles from './About.module.sass';

type AboutPageProps = {};

const AboutPage = ({}: AboutPageProps) => {
  const [showMore, setShowMore] = React.useState<boolean>(false);
  return (
    <section>
      <SectionTitle title={ABOUT_PAGE.title} bg bc={['Главная', 'О комплексе']} />
      <div className={`flex flex-col relative bg-[#1a222b] text-white`}>
        <div className={`flex items-start justify-between max-w-zhk_max mx-auto pt-8`}>
          <div className={`flex flex-col w-1/2`}>
            <div className={styles.about_text_0 + ` border-l-4 border-[#52d8af] pl-2 py-2`}>
              {ABOUT_PAGE.sections[0].text[0]}
            </div>
            <div className={styles.about_text_1 + ` my-6`}>{ABOUT_PAGE.sections[0].text[1]}</div>
          </div>
          <div className={`flex flex-col items-end w-1/2`}>
            <Text className={styles.about_text_2 + ` w-4/6 pb-6`}>{ABOUT_PAGE.sections[0].text[2]}</Text>
          </div>
        </div>
      </div>
      <div className={`flex flex-col relative bg-[#1a222b] text-white pb-20`}>
        <div className={`absolute right-[127px] bottom-[122px]`}>
          <LocalSVG.Logo />
        </div>
        <div className={`flex items-start justify-between max-w-zhk_max w-full mx-auto`}>
          <div className={`relative h-[387px] w-1/2`}>
            <Image
              alt={'ЖК Космос'}
              src={`/images/${ABOUT_PAGE.sections[0].images[0]}`}
              width={732}
              height={387}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className={`w-1/2 pl-6 pt-6`}>
            <Text className={styles.about_text_3 + ` w-[336px] pb-6`}>{ABOUT_PAGE.sections[0].text[3]}</Text>
          </div>
        </div>
      </div>
      <div className={`flex flex-col relative bg-[#1a222b] text-white`}>
        <div className={`w-full flex min-h-max h-auto aspect-[1439/657] relative`}>
          <div className={`max-w-zhk_max w-full mx-auto flex z-10`}>
            <div className={styles.about_text_3 + ` w-1/2 mt-10`}>{ABOUT_PAGE.sections[0].text[4]}</div>
          </div>
          <div className={`absolute aspect-[1189/657] w-8/12 h-auto bg-[#52d8af]`}></div>
          <div className={`absolute w-6/12 aspect-[732/387] h-auto right-0`}>
            <Image
              alt={'ЖК Космос'}
              src={`/images/${ABOUT_PAGE.sections[0].images[1]}`}
              width={732}
              height={387}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
        </div>
        <div className={`flex flex-col relative bg-[#1a222b] text-white`}>
          <div className={`max-w-zhk_max w-full mx-auto flex flex-col`}>
            <Text className={styles.about_section2_title + ` w-1/2 mt-10`}>
              {ABOUT_PAGE.sections[1].title || ''}
            </Text>

            <div className={`flex w-full mt-32`}>
              <div className={`relative w-6/12 flex`}>
                <div className={`w-9/12`}>
                  <Image
                    alt={'ЖК Космос'}
                    src={`/images/${ABOUT_PAGE.sections[1].images[0]}`}
                    width={580}
                    height={637}
                    layout={'responsive'}
                    objectFit={'cover'}
                  />
                </div>
                <div
                  className={
                    styles.about_section2_text + ` absolute w-2/6 top-20 right-4 whitespace-nowrap rotate-90`
                  }
                >
                  {ABOUT_PAGE.sections[1].text[0]}
                </div>
              </div>
              <div className={`relative w-6/12 flex -mt-40`}>
                <div className={`w-4/6`}>
                  <Image
                    alt={'ЖК Космос'}
                    src={`/images/${ABOUT_PAGE.sections[1].images[1]}`}
                    width={579}
                    height={710}
                    layout={'responsive'}
                    objectFit={'cover'}
                  />
                  <div
                    className={
                      styles.about_section2_text +
                      ` absolute w-2/6 top-20 right-20 whitespace-nowrap rotate-90`
                    }
                  >
                    {ABOUT_PAGE.sections[1].text[1]}
                  </div>
                </div>
              </div>
            </div>
            <div className={`flex w-full justify-center mt-40 pb-24`}>
              <div className={`relative w-7/12`}>
                <div className={`relative w-5/6`}>
                  <Image
                    alt={'ЖК Космос'}
                    src={`/images/${ABOUT_PAGE.sections[1].images[2]}`}
                    width={710}
                    height={468}
                    layout={'responsive'}
                    objectFit={'cover'}
                  />
                </div>
                <div
                  className={
                    styles.about_section2_text + ` absolute w-1/5 top-12 right-2 whitespace-nowrap rotate-90`
                  }
                >
                  {ABOUT_PAGE.sections[1].text[2]}
                </div>
              </div>
            </div>
          </div>
        </div>
        {showMore ? (
          <div className={`flex flex-col relative bg-[#1a222b] text-white pb-60 mt-4`}>
            <div className={`max-w-zhk_max w-full mx-auto flex flex-col`}>
              <div className={`flex w-full`}>
                <div className={`relative w-6/12 flex`}>
                  <div className={`w-9/12`}>
                    <Image
                      alt={'ЖК Космос'}
                      src={`/images/${ABOUT_PAGE.sections[1].images[3]}`}
                      width={580}
                      height={465}
                      layout={'responsive'}
                      objectFit={'cover'}
                    />
                  </div>
                  <div
                    className={
                      styles.about_section2_text +
                      ` absolute w-2/6 top-20 right-4 whitespace-nowrap rotate-90`
                    }
                  >
                    {ABOUT_PAGE.sections[1].text[3]}
                  </div>
                </div>
                <div className={`relative w-6/12 flex mt-4`}>
                  <div className={`w-4/6`}>
                    <Image
                      alt={'ЖК Космос'}
                      src={`/images/${ABOUT_PAGE.sections[1].images[4]}`}
                      width={668}
                      height={541}
                      layout={'responsive'}
                      objectFit={'cover'}
                    />
                    <div
                      className={
                        styles.about_section2_text +
                        ` absolute w-2/6 top-20 right-20 whitespace-nowrap rotate-90`
                      }
                    >
                      {ABOUT_PAGE.sections[1].text[4]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={`flex w-full justify-center py-4`}>
            <ShowMore onClick={() => setShowMore(!showMore)}/>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutPage;
