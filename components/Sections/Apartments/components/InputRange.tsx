import React from 'react';

type InputRangeProps = {
  from?: boolean;
  to?: boolean;
  placeholder: number;
};

const InputRange = ({from, to, placeholder}: InputRangeProps) => {
  return (
    <div className={`border pl-2`}>
        {from && 'От'}
        {to && 'До'}
      <input className={`ml-2 outline-none`} placeholder={placeholder.toString()}/>
    </div>
  );
};

export default InputRange;
