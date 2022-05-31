import React from 'react';
import { ApartmentCard } from './';

type ApartmentsListProps = {
  lg?: boolean;
  data?: {
    id: string;
    title: string;
    categories: string[];
    subTitle: string;
    stations: string[];
    address: string;
    prices: number;
    squarePrice: number;
    images: string[];
  }[];
  category: string;
};

const ApartmentsList = ({ lg, data, category }: ApartmentsListProps) => {
  return (
    <div className={`flex flex-wrap justify-between`}>
      {data?.map((apartment, i) => {
        return (
          apartment.categories.includes(category) && <ApartmentCard key={`apartment${i}`} data={apartment} />
        );
      })}
    </div>
  );
};

export default ApartmentsList;

