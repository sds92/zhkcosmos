import React from 'react';
import Image from 'next/image';

import { SectionTitle, Text, Icons } from 'components';
import { ToolTip } from './components';

import { VIRTUAL_TOUR } from 'configs/constants';
import styles from './Sections.module.sass';

type VirtualTourProps = {};

const cn = {
  tooltipTopText: styles.virtualTooltipTopText + ` pr-20`,
  tooltipBotText: styles.virtualTooltipBotText + ` uppercase py-4 pl-1`,
};

const VirtualTour = ({}: VirtualTourProps) => {
  const [w, setW] = React.useState<number>(0);
  React.useEffect(() => {
    setW(window.innerWidth);
  }, []);

  return (
    <section className={`pb-8 flex flex-col w-full min-h-screen h-full`}>
      <SectionTitle title={VIRTUAL_TOUR.title} />
      <div className={`w-full grow relative`}>
        <ToolTip
          className={`top-0 left-0 bg-[#52d8af] py-[24px] text-[#d8dcd3]`}
          text={
            <p style={{ paddingLeft: `${(w - 1450) / 2}px` }} className={cn.tooltipTopText}>
              {VIRTUAL_TOUR.frame.title}
            </p>
          }
        />
        <ToolTip
          className={`bottom-0 right-0 bg-[#52d8af] text-[#d8dcd3] flex items-center px-4`}
          text={
            <>
              <Icons.Location />
              <Text style={{ paddingRight: `${(w - 1444) / 2}px` }} className={cn.tooltipBotText}>{VIRTUAL_TOUR.frame.toolTip}</Text>
            </>
          }
        />
        <Image
          src={`/images/${VIRTUAL_TOUR.frame.image}`}
          alt={VIRTUAL_TOUR.frame.title}
          width={1920}
          height={969}
          layout={'fill'}
          objectFit={'cover'}
        />
      </div>
    </section>
  );
};

export default VirtualTour;
