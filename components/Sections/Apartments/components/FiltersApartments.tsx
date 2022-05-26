import React from 'react';
import { Select, Range, Check } from './';
import { APARTMENTS_LG } from 'configs/constants';

type FiltersApartmentsProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  filters: typeof APARTMENTS_LG.filters;
};

const FiltersApartments = ({ show, setShow, filters }: FiltersApartmentsProps) => {
  return (
    <div className={`flex`}>
      {filters.map((filter, i) => {
        return (
          <div key={`filter${i}`} className={`flex flex-col`}>
            <div>{filter.title}</div>
            <React.Fragment>
              {(() => {
                switch (filter.type) {
                  case 'range': {
                    return <Range filter={filter}/>;
                  }
                  case 'check': {
                    return <Check filter={filter}/>;
                  }
                  case 'select': {
                    return <Select filter={filter}/>;
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
  );
};

export default FiltersApartments;
