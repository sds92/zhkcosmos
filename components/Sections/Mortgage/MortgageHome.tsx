import React from 'react';
import { Text, SectionTitle, QueryContainers } from 'components';
import { LocalSvg } from '../components';
import { MORTGAGE_HOME } from 'configs/constants';
import styles from './Mortgage.module.sass';

type MortgageHomeProps = {};

const MortgageHome = ({}: MortgageHomeProps) => {
  return (
    <section className={`max-w-zhk_max mx-auto pb-8`}>
      <SectionTitle title={MORTGAGE_HOME.title} />
      <div className={`h-[230px]`}>
        <QueryContainers.M1 />
      </div>
      <div>
        <h2 className={styles.mortgageBottomRow + ` pb-4`}>{MORTGAGE_HOME.bottomRow.title}</h2>
        <div className={`flex w-full`}>
          {MORTGAGE_HOME.bottomRow.items.map((item, i) => (
            <div key={`item${i}`} className={`grow flex items-center`}>
              <div
                className={
                  styles.mortgageBottomRowNumber +
                  ` h-[60px] aspect-square bg-[#52D8AF] flex flex-center justify-center items-center shadow-md`
                }
              >
                {i + 1}
              </div>
              <Text className={styles.mortgageBottomRowItem + ` px-4 whitespace-nowrap`}>{item}</Text>
              {i !== MORTGAGE_HOME.bottomRow.items.length - 1 && <LocalSvg.LongArrowRight />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MortgageHome;
