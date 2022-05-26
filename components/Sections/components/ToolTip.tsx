import React from 'react';

type ToolTipProps = {
  className: string;
  text: React.ReactNode;
};

const ToolTip = ({ className, text }: ToolTipProps) => {
  return <div className={`absolute z-50 ${className}`}>{text}</div>;
};

export default ToolTip;
