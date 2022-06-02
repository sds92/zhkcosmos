import React from 'react';
import { SectionTitle } from 'components';
import { SalesList, QueryContainer, SalesViewer } from './components';
import { SALES_PAGE } from 'configs/constants';

type SalesPageProps = {};

const SalesPage = ({}: SalesPageProps) => {
  const [isList, setIsList] = React.useState<boolean>(true);
  const [section, setSection] = React.useState<string>('1');
  const [category, setCategory] = React.useState<string>('all')
  return (
    <section>
      <SectionTitle bg title={SALES_PAGE.title} />
      <QueryContainer>
        {isList ? <SalesList category={category} setCategory={setCategory} setIsList={()=>setIsList(false)} setSection={setSection}/> : <SalesViewer id={section}/>}
      </QueryContainer>
    </section>
  );
};

export default SalesPage;
