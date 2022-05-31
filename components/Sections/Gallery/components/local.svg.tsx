import React from 'react';

const Close: React.FC<{ className: string }> = (props) => (
  <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_461_9619)'>
      <path
        d='M1.55046 30.0001C1.15529 30.0001 0.760112 29.8498 0.45987 29.5473C-0.142873 28.9445 -0.142873 27.9673 0.45987 27.3646L27.3724 0.452058C27.9751 -0.150686 28.9523 -0.150686 29.5551 0.452058C30.1578 1.0548 30.1578 2.032 29.5551 2.63512L2.64293 29.5473C2.34043 29.8479 1.94526 30.0001 1.55046 30.0001Z'
        fill='#1A222B'
      />
      <path
        d='M28.4649 30.0001C28.0697 30.0001 27.6749 29.8498 27.3743 29.5473L0.45987 2.63512C-0.142873 2.032 -0.142873 1.0548 0.45987 0.452058C1.06261 -0.150686 2.03981 -0.150686 2.64293 0.452058L29.5551 27.3646C30.1578 27.9673 30.1578 28.9445 29.5551 29.5473C29.2526 29.8479 28.8578 30.0001 28.4649 30.0001Z'
        fill='#1A222B'
      />
    </g>
    <defs>
      <clipPath id='clip0_461_9619'>
        <rect width='30' height='30' fill='white' />
      </clipPath>
    </defs>
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
  Close,
  FotoGallerySliderArrowLeft,
  FotoGallerySliderArrowRight,
};

export default LocalSVG;
