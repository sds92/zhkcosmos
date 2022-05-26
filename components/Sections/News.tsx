import React from 'react';
import { Text, SectionTitle, SectionContentM0, QueryContainers } from 'components';
import { NEWS } from 'configs/constants';

type NewsProps = {};

const News = ({}: NewsProps) => {
  return (
    <section className={`pb-8`}>
        <SectionTitle title={NEWS.title}/>
        <SectionContentM0 data={NEWS}>
          <QueryContainers.M0/>
        </SectionContentM0>
    </section>
  );
};

export default News;
