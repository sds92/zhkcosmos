import React from 'react';
import { APARTMENTS_LG } from 'configs/constants';

type CheckProps = {
  filter: typeof APARTMENTS_LG.filters[0];
};

const Check = ({ filter }: CheckProps) => {
  return (
    <div className={`flex items-center`}>
      {filter.values.map((value, i) => {
        return (
          <div
            key={`value${i}`}
            className={`w-[40px] h-[40px] border flex items-center justify-center cursor-pointer`}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default Check;
