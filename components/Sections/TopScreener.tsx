import React from 'react';

type TopScreenerProps = {
  children: React.ReactNode;
};

const TopScreener = ({children}: TopScreenerProps) => {
  return (
    <section className={'relative w-full'}>
      <p>Сайт в разработке</p>
      {children}
    </section>
  );
};

export default TopScreener;
