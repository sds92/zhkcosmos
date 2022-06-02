import type { NextPage } from 'next';
import { GetStaticPaths, GetStaticProps } from 'next';
import { URLSearchParams } from 'url';
import { Sections } from 'components';
// import { fakeData } from 'data/fakeData';

type ApartmentPageProps = {
  apartment: {
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

const Appartment: NextPage<ApartmentPageProps> = ({ apartment }: ApartmentPageProps) => {
  // console.log('🚀 ~ file: [id].tsx ~ line 29 ~ apartment', apartment);
  return (
    <>
      <Sections.Apartment data={apartment} />
    </>
  );
};

export default Appartment;

interface IParams extends URLSearchParams {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as unknown as IParams;
  const { fakeData } = require('../../data/fakeData');
  // console.log("🚀 ~ file: [id].tsx ~ line 45 ~ constgetStaticProps:GetStaticProps= ~ fakeData", fakeData)
  // const props = await fetch(`http://127.0.0.1:3000/api/apartments/${id}`).then((res) => res.json());
  const apartment = fakeData.find((item: any) => item.id.toString() === id.toString());
  return { props: {apartment} };
};

export const getStaticPaths: GetStaticPaths = () => {
  const arr: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
  const paths = arr.map((id) => {
    return {
      params: { id },
    };
  });
  return { paths, fallback: true };
};
