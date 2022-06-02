import React from 'react';
import { SectionTitle } from 'components';
import { SVGLocal, ProgressSlider, ProgressList, QueryContainer } from './components';
import { PROGRESS } from 'configs/constants';
import styles from './Progress.module.sass';

type ProgressProps = {};

const Progress = ({}: ProgressProps) => {
  const [isSlider, setIsSlider] = React.useState<boolean>(false);
  const [section, setSection] = React.useState<number>(0);

  return (
    <section>
      <SectionTitle bg title={PROGRESS.title} />
      <QueryContainer>
        {isSlider ? (
          <ProgressSlider section={section} switchOff={() => setIsSlider(false)} />
        ) : (
          <ProgressList setSection={(a: number) => setSection(a)} setSlider={() => setIsSlider(true)} />
        )}
      </QueryContainer>
    </section>
  );
};

export default Progress;
