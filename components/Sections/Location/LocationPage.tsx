import React from 'react';
import { SectionTitle, Text } from 'components';
import { LocationSections, SVGLocal } from './components';
import { LOCATION_PAGE } from 'configs/constants';
import styles from './Location.module.sass';

type LocationPageProps = {};

const LocationPage = ({}: LocationPageProps) => {
  const [w, setW] = React.useState<undefined | number>(undefined);
  const [curItem, setCurItem] = React.useState<number>(0);

  const content = LOCATION_PAGE.sections[curItem];
  const Section = LocationSections[curItem];

  const arrowClick = (direction: string) => {
    switch (direction) {
      case '>': {
        curItem < (LOCATION_PAGE.sections.length - 1) ? setCurItem((s) => s + 1) : setCurItem(0);
        break;
      }
      case '<': {
        curItem > 0 ? setCurItem((s) => s - 1) : setCurItem(LOCATION_PAGE.sections.length - 1);
        break;
      }
      default:
        break;
    }
  };

  React.useEffect(() => {
    const setDimensions = () => {
      setW(window.innerWidth);
    };
    setDimensions();
    window.addEventListener('resize', setDimensions);
    return window.removeEventListener('resize', setDimensions);
  }, []);

  return w ? (
    <section className={`min-h-screen h-1 flex flex-col`}>
      <SectionTitle title={LOCATION_PAGE.title} bg bc={['Главная', 'Расположение']} />
      <div className={`w-full flex grow relative`}>
        <div className={`w-1/3 bg-[#52d8af] h-full absolute left-0 top-0`}></div>
        <div className={`w-2/3 bg-[#1a222b] h-full absolute right-0 top-0`}></div>
        <div className={`max-w-zhk_max w-full mx-auto flex h-full z-10`}>
          <div className={`w-1/3 bg-[#52d8af] h-full flex flex-col items-end`}>
            <Text className={`h-1/3 font-bold text-[20vh] text-[#1a222b]`}>{content.left?.[0]}</Text>
            <div className={`flex flex-col self-start grow`}>
              {LOCATION_PAGE.sections.map((item, i) => {
                return (
                  <div
                    key={`item${i}`}
                    className={`${styles.menu_item} py-1 cursor-pointer relative`}
                    onClick={() => setCurItem(i)}
                  >
                    {curItem === i && <SVGLocal.Pointer className={`absolute -left-6`} />}
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className={`${styles.left_last} text-[#1a222b] pb-4 pr-4`}>{content.left[1]}</div>
          </div>
          <div className={` w-2/3 bg-[#1a222b] h-full relative`}>
            <div className={`flex  gap-2 absolute top-6 right-0 z-50`}>
              <div
                className={`h-[40px] bg-white w-auto aspect-square border flex items-center justify-center p-1 shadow-md cursor-pointer hover:scale-105 hover:shadow-sm active:scale-95 transition-all`}
                onClick={() => {
                  arrowClick('<');
                }}
              >
                <SVGLocal.ArrowLeft className={``} />
              </div>
              <div
                onClick={() => {
                  arrowClick('>');
                }}
                className={`h-[40px] bg-white w-auto aspect-square border flex items-center justify-center p-1 shadow-md cursor-pointer hover:scale-105 hover:shadow-sm active:scale-95 transition-all`}
              >
                <SVGLocal.ArrowRight className={``} />
              </div>
            </div>
            {(() => {
              switch (curItem) {
                case 0: {
                  return <Section data={content} />;
                }
                case 1: {
                  return <Section data={content} />;
                }
                case 2: {
                  return <Section data={content} />;
                }
                case 3: {
                  return <Section data={content} />;
                }
                default:
                  break;
              }

              return <></>;
            })()}
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default LocationPage;
