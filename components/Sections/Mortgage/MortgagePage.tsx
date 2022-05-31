import React from 'react';
import { Text, SectionTitle } from 'components';
import { QueryContainer, MortgageList } from './components';
import { MORTGAGE } from 'configs/constants';
import styles from './Mortgage.module.sass';

type MortgagePageProps = {};

const MortgagePage = ({}: MortgagePageProps) => {
  const [values, setValues] = React.useState<{ [key: number]: string }>({});
  return (
    <section>
      <SectionTitle bg title={MORTGAGE.title} />
      <div className={`max-w-zhk_max w-full mx-auto flex flex-col`}>
        <div className={`${styles.calculator_title} w-full`}>{MORTGAGE.calculator.title}</div>
        <div className={`flex`}>
          {/* LEFT */}
          <div className={`w-1/4`}>
            {MORTGAGE.calculator.filters.map((filter, i) => {
              return (
                <div key={`filter${i}`} className={`flex flex-col`}>
                  <div className={`${styles.calculator_filter_title}`}>{filter.title}</div>
                  <div className={`${styles.calculator_filter_value}`}>{values[i] || filter.placeholder}</div>
                  <input
                    title={filter.title}
                    type={filter.type}
                    value={values[i] || filter.placeholder}
                    min={filter.minmax[0]}
                    max={filter.minmax[1]}
                  />
                  <div className={`flex justify-between`}>
                    <div className={`${styles.calculator_filter_minmax}`}>{filter.minmax[0]}</div>
                    <div className={`${styles.calculator_filter_minmax}`}>{filter.minmax[1]}</div>
                  </div>
                </div>
              );
            })}
            <div className={`${styles.calculator_reference} w-full`}>{MORTGAGE.calculator.reference}</div>
          </div>
          {/* RIGHT */}
          <div className={`w-3/4 bg-[#f6f6f6] flex flex-col`}>
            <div className={`${styles.program_title}`}>{MORTGAGE.programs.title}</div>
            {/* FILTERS */}
            <div className={`flex flex-col`}>
              {MORTGAGE.programs.filters.map((filter, i) => {
                return (
                  <div key={`filter${i}`} className={`flex items-center justify-start`}>
                    {filter.values.map(([name, title], ii) => {
                      return (
                        <div key={`filter_value${ii}`} className={`pr-4`}>
                          <input
                            name={filter.name}
                            title={title}
                            id={`filter${name}`}
                            type={filter.type}
                            className={`mx-2`}
                          />
                          <label htmlFor={`filter${name}`} className={`${styles.program_filter_label}`}>
                            {title}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            {/* PROGRAMS */}
            <div className={`flex flex-col w-full`}>
              <QueryContainer>
               <MortgageList/>   
               
              </QueryContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgagePage;
