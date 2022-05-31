import { SectionTitle } from 'components';

import React from 'react';
import { SVGLocal, ProgressElement } from './components';
import { PROGRESS } from 'configs/constants';
import styles from './Progress.module.sass';

type ProgressProps = {};

const Progress = ({}: ProgressProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [elW, setElW] = React.useState<undefined | number>(undefined);
  const [winW, setWinW] = React.useState<undefined | number>(undefined);
  const [curX, setCurX] = React.useState<number>(0);

  console.log('🚀 ~ file: Progress.tsx ~ line 20 ~ handleCurX ~ curX <= w', elW, curX, winW);
  const handleCurX = (direction: string) => {
    if (elW && winW) {
      switch (direction) {
        case '>': {
          elW + curX > winW ? setCurX((s) => s - 500) : setCurX(winW - elW);
          break;
        }
        case '<': {
            elW + curX < winW ? setCurX((s) => s + 500) : setCurX(0);
          break;
        }
        default:
          break;
      }
    }
  };

  React.useEffect(() => {
    if (ref.current) {
      var positionInfo = ref.current.getBoundingClientRect();

      setElW(positionInfo.width);
      setWinW(window.innerWidth);
    }
  }, []);

  return (
    <section>
      <SectionTitle bg title={PROGRESS.title} />
      <div className={`max-w-zhk_max w-full mx-auto flex justify-end py-8`}>
        <div className={`flex relative gap-1`}>
          <div
            className={`h-[40px] rounded-sm w-auto aspect-square border flex items-center justify-center p-1 shadow-md cursor-pointer hover:scale-105 hover:shadow-sm active:scale-95 transition-all`}
            onClick={() => handleCurX('<')}
          >
            <SVGLocal.ArrowLeft className={``} />
          </div>
          <div
            className={`h-[40px] rounded-sm w-auto aspect-square border flex items-center justify-center p-1 shadow-md cursor-pointer hover:scale-105 hover:shadow-sm active:scale-95 transition-all`}
            onClick={() => handleCurX('>')}
          >
            <SVGLocal.ArrowRight className={``} />
          </div>
        </div>
      </div>
      <div className={`w-full py-10 min-h-[400px] relative`}>
        <div
          ref={ref}
          style={{ left: `${curX}px` }}
          className={`absolute flex gap-6 transition-all duration-500`}
        >
          {PROGRESS.elements.map((el, i) => {
            return <ProgressElement data={el} key={`element${i}`} i={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Progress;
