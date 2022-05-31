import React from 'react';
import { SectionTitle } from 'components';
import { APARTMENT_MORGAGE, MORTGAGE_SAMPLE } from 'configs/constants';

import styles from '../Apartments.module.sass';

type MortgageProps = {};

const Mortgage = ({}: MortgageProps) => {
  const [input, setInput] = React.useState<undefined | number>(undefined);
  return (
    <section className={`max-w-zhk_max mx-auto cursor-default`}>
      <SectionTitle title={'Ипотека на эту квартиру'} />
      <div className={`flex justify-between`}>
        <div className={`flex w-9/12`}>
          {APARTMENT_MORGAGE.filters.map((filter, i) => {
            return (
              <div key={`filter${i}`} className={`flex flex-col w-4/12`}>
                <div className={`py-2 ${styles.mortgage_filter_title}`}>{filter.title}</div>
                <div className={`py-2 ${styles.mortgage_filter_value}`}>{input || filter.placeholder}</div>
                <input onChange={()=>{}} className={`w-3/4 py-2`} title={filter.title} type={'range'} />
              </div>
            );
          })}
        </div>
        <div className={`flex w-3/12 `}>
          <div
            className={`border shadow-md h-min py-2 text-center w-full cursor-pointer ${styles.mortgage_filter_button}`}
          >
            Оставить заявку
          </div>
        </div>
      </div>
      <div className={`flex `}>
        {Array.from(Array(4).keys()).map((mortgage, i) => {
          return (
            <div key={`mortage${i}`} className={`border shadow-md w-1/4`}>
              <div>{MORTGAGE_SAMPLE.title}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Mortgage;
