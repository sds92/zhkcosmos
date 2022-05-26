import React from 'react';
import { APARTMENTS_LG } from 'configs/constants';

type SelectProps = {
  filter: typeof APARTMENTS_LG.filters[0];
};

const Select = ({ filter }: SelectProps) => {
  return (
    <div>
      <select title={filter.title} className={'cursor-pointer outline-none'}>
        {filter.values.map((value, i) => {
          return <option key={`value${i}`}>{value}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
