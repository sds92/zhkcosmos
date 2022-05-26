import React from 'react';
import { Text, SectionTitle, SectionContentM0, QueryContainers } from 'components';
import { SALES } from 'configs/constants';

type SalesProps = {};

const Sales = ({}: SalesProps) => {
  return (
    <section className={`pb-8`}>
        <SectionTitle title={SALES.title}/>
        <SectionContentM0 data={SALES} left>
          <QueryContainers.M0/>
        </SectionContentM0>
    </section>
  );
};

export default Sales;
