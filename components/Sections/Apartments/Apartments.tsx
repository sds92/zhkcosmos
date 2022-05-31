import React from 'react';
import { SectionTitle } from 'components';
import {FiltersApartments, QueryContainer, ApartmentsList, CategoriesApartments} from './components';
import { APARTMENTS_LG } from 'configs/constants';
import styles from './Apartments.module.sass';

type ApartmentsProps = {};

const ApartmentsLG = ({}: ApartmentsProps) => {
  const [showFilters, setShowFilters] = React.useState<boolean>(true);
  const [curCategory, setCurCategory] = React.useState<number>(0)

  return (
    <section className={`max-w-zhk_max w-full mx-auto`}>
      <SectionTitle title={APARTMENTS_LG.title} bc={['Главная', 'Квартиры']} />
      <FiltersApartments show={showFilters} setShow={setShowFilters} filters={APARTMENTS_LG.filters} />
      <CategoriesApartments data={APARTMENTS_LG.categories} cur={curCategory} onClick={(a:number) => setCurCategory(a)}/>
      <QueryContainer>
        <ApartmentsList lg category={APARTMENTS_LG.categories[curCategory]}/>
      </QueryContainer>
    </section>
  );
};

export default ApartmentsLG;
