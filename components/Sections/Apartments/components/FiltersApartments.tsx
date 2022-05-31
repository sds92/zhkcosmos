import React from 'react';
import { Select, Range, Check } from './';
import { APARTMENTS_LG } from 'configs/constants';
import styles from '../Apartments.module.sass'

type FiltersApartmentsProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  filters: typeof APARTMENTS_LG.filters;
};

const FiltersApartments = ({ show, setShow, filters }: FiltersApartmentsProps) => {
  return (
    <div className={`flex flex-col`}>
      <div className={`flex items-center`}>
        {filters.map((filter, i) => {
          return (
            <div key={`filter${i}`} className={`flex flex-col`}>
              <div>{filter.title}</div>
              <React.Fragment>
                {(() => {
                  switch (filter.type) {
                    case 'range': {
                      return <Range filter={filter} />;
                    }
                    case 'check': {
                      return <Check filter={filter} />;
                    }
                    case 'select': {
                      return <Select filter={filter} />;
                    }

                    default:
                      return <></>;
                  }
                })()}
              </React.Fragment>
            </div>
          );
        })}
      </div>
      <div className={`flex`}>
        <div className={styles.filters_buttons + ` bg-[#1a222b] text-white text-center py-4 cursor-pointer w-1/4`}>Показать {} предложений</div>
        <div className={styles.filters_buttons + ` text-[#C4C4C4] px-8 py-4 cursor-pointer`}>Очистить все</div>
      </div>
    </div>
  );
};

export default FiltersApartments;
