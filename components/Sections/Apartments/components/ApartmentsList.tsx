import React from 'react';
import {ApartmentCard} from './'

type ApartmentsListProps = {
  lg?: boolean;
  data?: {
    title: string;
    subTitle: string;
    stations: string[];
    address: string;
    prices: number;
    squarePrice: number;
    images: string[];
  }[];
};

const ApartmentsList = ({ lg, data }: ApartmentsListProps) => {
  return (
    <div className={`flex flex-wrap`}>
      {data?.map((apartment, i) => {
        return (<ApartmentCard key={`apartment${i}`} data={apartment}/>)
      })}
    </div>
  );
};

export default ApartmentsList;
