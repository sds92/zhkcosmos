import Image from 'next/image';
import React from 'react';
import { APARTMENT } from 'configs/constants';
import { SVGLocal } from './';
import styles from '../Apartments.module.sass';

type ApartmentViewerProps = {
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

const ApartmentViewer = ({ data }: ApartmentViewerProps) => {
  const [imgCategory, setImgCategory] = React.useState<number>(0);
  return (
    <div className={`max-w-zhk_max mx-auto flex mb-2 relative`}>
      <div className={`absolute flex w-5/12 z-50`}>
        {['Планировка', 'Фотографии'].map((_imgCategory, i) => {
          return (
            <div
              key={`imgCategory${i}`}
              className={`w-1/2 text-center cursor-pointer py-3  ${i !== imgCategory ? 'bg-[#c4c4c4]' : ``} `}
              onClick={() => setImgCategory(i)}
            >
              {_imgCategory}
            </div>
          );
        })}
      </div>
      <div className={`w-2/3 border-b border-x relative shadow-md`}>
        <Image
          src={`/images/apartments/plans/1.webp`}
          alt={``}
          width={852}
          height={639}
          layout={'responsive'}
          objectFit={'cover'}
        />
        <SVGLocal.BookMark
          className={`absolute top-0 right-6 drop-shadow-md hover:drop-shadow-xl cursor-pointer hover:scale-105 transition-all active:scale-95`}
        />

        <div className={`flex absolute bottom-6 gap-4 left-6 bg-white`}>
          <SVGLocal.Print
            className={` drop-shadow-md hover:drop-shadow-xl cursor-pointer hover:scale-105 transition-all active:scale-95`}
          />
          <SVGLocal.Send
            className={` drop-shadow-md hover:drop-shadow-xl cursor-pointer hover:scale-105 transition-all active:scale-95`}
          />
        </div>
        <div className={`flex absolute bottom-6 right-6`}>
          <div
            className={`h-[40px] w-auto aspect-square border flex items-center justify-center p-1 shadow-md cursor-pointer hover:scale-105 hover:shadow-sm active:scale-95 transition-all`}
          >
            <SVGLocal.ArrowLeft className={``} />
          </div>
          <div
            className={`h-[40px] w-auto aspect-square border flex items-center justify-center p-1 shadow-md cursor-pointer hover:scale-105 hover:shadow-sm active:scale-95 transition-all`}
          >
            <SVGLocal.ArrowRight className={``} />
          </div>
        </div>
      </div>
      <div className={`w-1/3 ml-8`}>
        <div className={`flex flex-col`}>
          <div className={`py-2 mt-1.5 ${styles.apartment_entity_title}`}>{APARTMENT.title}</div>
          <div className={`py-2 mb-1.5 ${styles.apartment_entity_value}`}>
            Квартира №{data.number} Корпус {data.building}
          </div>
          <div className={`flex py-1.5`}>
            <div className={`w-1/4`}>
              <div className={`py-2 ${styles.apartment_entity_title}`}>{APARTMENT.rooms}</div>
              <div className={`py-2 ${styles.apartment_entity_value}`}>{data.square}</div>
            </div>
            <div className={`w-1/4`}>
              <div className={`py-2 ${styles.apartment_entity_title}`}>{APARTMENT.floor}</div>
              <div className={`py-2 ${styles.apartment_entity_value}`}>{data.square}</div>
            </div>
          </div>
          <div className={`flex py-1.5`}>
            <div className={`w-1/4`}>
              <div className={`py-2 ${styles.apartment_entity_title}`}>{APARTMENT.square}</div>
              <div className={`py-2 ${styles.apartment_entity_value}`}>{data.square} кв.м</div>
            </div>
            <div className={`w-1/4`}>
              <div className={`py-2 ${styles.apartment_entity_title}`}>{APARTMENT.building}</div>
              <div className={`py-2 ${styles.apartment_entity_value}`}>{data.building}</div>
            </div>
          </div>
          <div className={`py-2 mt-1.5 ${styles.apartment_entity_title}`}>{APARTMENT.squarePrice}</div>
          <div className={`py-2 mb-1.5 ${styles.apartment_entity_value}`}>{data.squarePrice} ₽</div>
          <div className={`w-3/4 border-t-2 py-2 ${styles.apartment_entity_title}`}>{APARTMENT.price}</div>
          <div className={`w-3/4 border-b-2 py-2 ${styles.apartment_entity_value}`}>{data.price} ₽</div>
        </div>
        <div
          className={`cursor-pointer py-3 my-2 w-3/4 bg-black text-white text-center ${styles.filters_buttons}`}
        >
          Бронировать
        </div>
        <div
          className={`cursor-pointer py-3 my-2 w-3/4 text-black border-2 border-black text-center ${styles.filters_buttons}`}
        >
          Записаться на консультацию
        </div>
        <div className={`flex w-full justify-between mt-6`}>
          <div className={`${styles.apartment_entity_title}`}>{APARTMENT.mortgage}</div>
          <div className={`${styles.apartment_entity_value}`}>{data.mortgage} ₽ в месяц</div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentViewer;
