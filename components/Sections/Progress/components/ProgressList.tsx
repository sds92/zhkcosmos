import React from 'react';
import { SectionTitle } from 'components';
import { SVGLocal, ProgressElement } from '.';
import { PROGRESS } from 'configs/constants';
import styles from '../Progress.module.sass';

type ProgressListProps = {
  setSlider: () => void;
  setSection: (a: number) => void;
};

const randomId = () => Math.random().toFixed(10).replace('.', '');

const ProgressList = ({ setSlider, setSection }: ProgressListProps) => {
  const [elW, setElW] = React.useState<undefined | number>(undefined);
  const [winW, setWinW] = React.useState<undefined | number>(undefined);
  const [progress, setProgress] = React.useState<number>(0);
  const [progressW, setProgressW] = React.useState<undefined | number>(undefined);

  const refImageContainer = React.useRef<HTMLDivElement>(null);
  const refProgressBar = React.useRef<HTMLDivElement>(null);
  const refProgressBarEl = React.useRef<HTMLDivElement>(null);

  const pace = elW && winW && (0.7 * winW) / elW;

  const ids = [randomId(), randomId()];

  const handleCurX = (direction: string) => {
    if (elW && winW && pace) {
      switch (direction) {
        case '>': {
          progress < 0.7 ? setProgress((s) => s + pace) : setProgress(1);
          break;
        }
        case '<': {
          progress > 0.3 ? setProgress((s) => s - pace) : setProgress(0);
          break;
        }
        default:
          break;
      }
    }
  };

  const catchClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!progressW || !elW || !winW) return;
    switch ((e.target as HTMLElement).id) {
      case `pb${ids[0]}`: {
        const _progress = e.nativeEvent.offsetX / (e.target as HTMLElement).offsetWidth;
        setProgress(_progress < 0.15 ? 0 : _progress > 0.85 ? 1 : _progress);
        break;
      }
      case `pbe${ids[1]}`: {
        const shift = e.nativeEvent.offsetX;

        if (!refProgressBar.current || !refProgressBarEl.current) return;

        if (shift < refProgressBarEl.current?.offsetWidth / 2) {
          let _shift =
            Math.abs(refProgressBarEl.current?.offsetWidth / 2 - shift) / refProgressBar.current?.offsetWidth;
          setProgress((s) => (s - _shift <= 0 ? 0 : s - _shift));
        } else {
          let _shift =
            Math.abs(refProgressBarEl.current?.offsetWidth / 2 - shift) / refProgressBar.current?.offsetWidth;
          setProgress((s) => (s + _shift >= 1 ? 1 : s + _shift));
        }
        break;
      }
      default:
        break;
    }
  };

  React.useEffect(() => {
    const onResize = () => {
      setWinW(window.innerWidth);
      if (refImageContainer.current) {
        let positionInfo = refImageContainer.current.getBoundingClientRect();
        setElW(positionInfo.width);
      }
      if (refProgressBar.current) {
        let positionInfo = refProgressBar.current.getBoundingClientRect();
        setProgressW(positionInfo.width);
      }
    };

    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return (
    <>
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
      <div className={`w-full py-10 min-h-[500px] h-full relative`}>
        <div
          ref={refImageContainer}
          style={{ left: `-${elW && winW && progress * (elW - winW)}px` }}
          className={`absolute flex gap-6 transition-all duration-500 w-max top-0`}
        >
          {PROGRESS.elements.map((el, i) => {
            return <ProgressElement data={el} key={`element${i}`} i={i} onClick={() => {setSlider(); setSection(i)}} />;
          })}
        </div>
      </div>
      <div
        ref={refProgressBar}
        id={`pb${ids[0]}`}
        className={`bg-[#1a222b] w-1/3 h-1.5 mx-auto mb-20 relative overflow-hidden cursor-pointer`}
        onMouseDown={(e) => catchClick(e)}
      >
        <div
          ref={refProgressBarEl}
          id={`pbe${ids[1]}`}
          style={{
            left: `${refProgressBar.current && refProgressBarEl.current && ((progress * 2) / 3) * 100}%`,
          }}
          className={`transition-all duration-1000 absolute h-full bg-[#52d8af] w-1/3`}
        ></div>
      </div>
    </>
  );
};

export default ProgressList;
