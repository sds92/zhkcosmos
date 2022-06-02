import React from 'react';

const ArrowLeft: React.FC<{ className: string }> = (props) => {
  return (
    <svg width='18' height='32' viewBox='0 0 18 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M3.35305 15.9926L17.2588 29.8983C17.7396 30.3792 17.7396 31.1587 17.2588 31.6395C16.7779 32.1201 15.9985 32.1201 15.5177 31.6395L0.741357 16.8631C0.260693 16.3823 0.260693 15.6028 0.741357 15.122L15.5177 0.345661C16.0069 -0.126778 16.7864 -0.113213 17.2588 0.375965C17.7196 0.853167 17.7196 1.60966 17.2588 2.08679L3.35305 15.9926Z'
        fill='black'
      />
    </svg>
  );
};
const ArrowRight: React.FC<{ className: string }> = (props) => {
  return (
    <svg width='18' height='32' viewBox='0 0 18 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M14.2671 16.0074L0.361297 2.10163C-0.119439 1.62082 -0.119439 0.841308 0.361297 0.360499C0.842177 -0.120165 1.62162 -0.120165 2.10242 0.360499L16.8788 15.1368C17.3594 15.6176 17.3594 16.3972 16.8788 16.878L2.10243 31.6543C1.61325 32.1267 0.833738 32.1132 0.361299 31.624C-0.0995233 31.1468 -0.0995233 30.3903 0.361299 29.9132L14.2671 16.0074Z'
        fill='black'
      />
    </svg>
  );
};

const SVGLocal = {
  ArrowRight,
  ArrowLeft,
};

export default SVGLocal;
