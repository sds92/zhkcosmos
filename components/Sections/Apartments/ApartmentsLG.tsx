import React from 'react';
import { SectionTitle } from 'components';
import {FiltersApartments, QueryContainer, ApartmentsList} from './components';
import { APARTMENTS_LG } from 'configs/constants';
import styles from './Apartments.module.sass';

type ApartmentsLGProps = {};

const ApartmentsLG = ({}: ApartmentsLGProps) => {
  const [showFilters, setShowFilters] = React.useState<boolean>(true);

  return (
    <section className={`max-w-zhk_max w-full mx-auto`}>
      <SectionTitle title={APARTMENTS_LG.title} bc={['Главная', 'Квартиры']} />
      <FiltersApartments show={showFilters} setShow={setShowFilters} filters={APARTMENTS_LG.filters} />
      <QueryContainer>
        <ApartmentsList lg/>
      </QueryContainer>
    </section>
  );
};

export default ApartmentsLG;
