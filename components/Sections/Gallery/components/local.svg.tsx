import React from 'react';
const LongArrowRight = () => (
  <svg
    className={`pr-4`}
    width='144'
    height='24'
    viewBox='0 0 144 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M2 12L140 12' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M134 5L141 12L134 19' stroke='black' strokeWidth='2' strokeLinecap='square' />
  </svg>
);

const FotoGallerySliderArrowLeft: React.FC<{ className: string; onClick: () => void }> = (props) => {
  return (
    <svg width='41' height='41' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_775_18177)'>
        <path
          d='M16.4 36.8999L19.27 34.0299L7.79001 22.5499H41V18.4499H7.79001L19.27 6.96993L16.4 4.09993L1.14441e-05 20.4999L16.4 36.8999Z'
          fill='#E5E5E5'
        />
      </g>
      <defs>
        <clipPath id='clip0_775_18177'>
          <rect width='41' height='41' fill='white' transform='translate(41 41) rotate(-180)' />
        </clipPath>
      </defs>
    </svg>
  );
};

const FotoGallerySliderArrowRight: React.FC<{ className: string; onClick: () => void }> = (props) => (
  <svg width='69' height='69' viewBox='0 0 69 69' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_775_18175)'>
      <path
        d='M41.4 6.8999L36.57 11.7299L55.89 31.0499H0V37.9499H55.89L36.57 57.2699L41.4 62.0999L69 34.4999L41.4 6.8999Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_775_18175'>
        <rect width='69' height='69' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const LocalSVG = {
  LongArrowRight,
  FotoGallerySliderArrowLeft,
  FotoGallerySliderArrowRight,
};

export default LocalSVG;
