import React from 'react';
import { SectionTitle } from 'components';
import { ApartmentViewer, Mortgage } from './components';

type ApartmentProps = {
  data: {
    id: string;
    number: string;
    title: string;
    rooms: string;
    floor: string;
    square: string;
    building: string;
    mortgage: string;
    text: string;
    categories: string[];
    subTitle: string;
    stations: string[];
    address: string;
    price: number;
    squarePrice: number;
    images: string[];
  };
};

const Apartment = ({data}: ApartmentProps) => {
  return (
    <section>
      <SectionTitle bg title={''} bc={['Главная', `Квартира ${data?.id || ''}`]} />
      <ApartmentViewer data={data} />
      <div className={`max-w-zhk_max mx-auto`}>{data?.text || ''}</div>
      <Mortgage/>
    </section>
  );
};

export default Apartment;
