import React from 'react';
import { InputRange } from './';
import { APARTMENTS_LG } from 'configs/constants';

type RangeProps = {
    filter: typeof APARTMENTS_LG.filters[0]
};

const Range = ({filter}: RangeProps) => {
  return (
    <div className={`flex`}>
      <InputRange from placeholder={filter.placeholders[0] as number}/>
      <InputRange to placeholder={filter.placeholders[1] as number}/>
    </div>
  );
};

export default Range;
