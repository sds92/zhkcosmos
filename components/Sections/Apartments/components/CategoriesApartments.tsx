import React from 'react';
import { APARTMENTS_LG } from 'configs/constants';
import styles from '../Apartments.module.sass';

type CategoriesApartmentsProps = {
  data: typeof APARTMENTS_LG.categories;
  cur: number;
  onClick: (a: number) => void;
};

const CategoriesApartments = ({ data, cur, onClick }: CategoriesApartmentsProps) => {
  return (
    <div className={`flex w-full`}>
      {data.map((category, i) => {
        return (
          <div
            key={`category${i}`}
            className={
              styles.categories_buttons +
              ` w-1/4 text-center py-4 text-white cursor-pointer ${cur === i ? 'bg-[#52d8af]' : 'bg-[#c4c4c4]'}`
            }
            onClick={() => onClick(i)}
          >
            {category}
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesApartments;
