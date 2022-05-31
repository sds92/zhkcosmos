// APARTMERNTS
import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Text, SectionTitle, Icons, UI } from 'components';

const queryClient = new QueryClient();

const fakeData = [
  {
    id: '1',
    number: '1',
    title: 'ЖК “Космос”. Домодедово. Дизайн, стиль. Новая!',
    rooms: '1',
    floor: '22',
    square: '29',
    building: 'K9',
    mortgage: '47000',
    text: 'Артикул 9-113. Продается квартира-студия с отделкой «white box» площадью 23.9 кв.м на 20 этаже 28-этажного корпуса 9 жилого комплекса ЖК “Космос” . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    categories: ['Квартиры'],
    subTitle: 'Дизайн, стиль. Новая!',
    stations: ['ост. Домодедово', 'МЦД'],
    address: 'г. Домодедово, микр-н Авиационный, ул. Жиковского',
    prices: 6500000,
    squarePrice: 186000,
    images: ['/images/Apartment01.webp'],
  },
  {
    id: '2',
    number: '2',
    title: 'ЖК “Космос”. Домодедово. Дизайн, стиль. Новая!',
    rooms: '1',
    floor: '22',
    square: '29',
    building: 'K9',
    mortgage: '47000',
    text: 'Артикул 9-113. Продается квартира-студия с отделкой «white box» площадью 23.9 кв.м на 20 этаже 28-этажного корпуса 9 жилого комплекса ЖК “Космос” . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    categories: ['Квартиры'],
    subTitle: 'Дизайн, стиль. Новая!',
    stations: ['ост. Домодедово', 'МЦД'],
    address: 'г. Домодедово, микр-н Авиационный, ул. Жиковского',
    prices: 6500000,
    squarePrice: 186000,
    images: ['/images/Apartment01.webp'],
  },
  {
    id: '3',
    number: '3',
    title: 'ЖК “Космос”. Домодедово. Дизайн, стиль. Новая!',
    rooms: '1',
    floor: '22',
    square: '29',
    building: 'K9',
    mortgage: '47000',
    text: 'Артикул 9-113. Продается квартира-студия с отделкой «white box» площадью 23.9 кв.м на 20 этаже 28-этажного корпуса 9 жилого комплекса ЖК “Космос” . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    categories: ['Квартиры'],
    subTitle: 'Дизайн, стиль. Новая!',
    stations: ['ост. Домодедово', 'МЦД'],
    address: 'г. Домодедово, микр-н Авиационный, ул. Жиковского',
    prices: 6500000,
    squarePrice: 186000,
    images: ['/images/Apartment01.webp'],
  },
  {
    id: '4',
    number: '4',
    title: 'ЖК “Космос”. Домодедово. Дизайн, стиль. Новая!',
    rooms: '1',
    floor: '22',
    square: '29',
    building: 'K9',
    mortgage: '47000',
    text: 'Артикул 9-113. Продается квартира-студия с отделкой «white box» площадью 23.9 кв.м на 20 этаже 28-этажного корпуса 9 жилого комплекса ЖК “Космос” . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    categories: ['Квартиры', 'Квартиры с отделкой'],
    subTitle: 'Дизайн, стиль. Новая!',
    stations: ['ост. Домодедово', 'МЦД'],
    address: 'г. Домодедово, микр-н Авиационный, ул. Жиковского',
    prices: 6500000,
    squarePrice: 186000,
    images: ['/images/Apartment01.webp'],
  },
  {
    id: '5',
    number: '5',
    title: 'ЖК “Космос”. Домодедово. Дизайн, стиль. Новая!',
    rooms: '1',
    floor: '22',
    square: '29',
    building: 'K9',
    mortgage: '47000',
    text: 'Артикул 9-113. Продается квартира-студия с отделкой «white box» площадью 23.9 кв.м на 20 этаже 28-этажного корпуса 9 жилого комплекса ЖК “Космос” . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    categories: ['Квартиры'],
    subTitle: 'Дизайн, стиль. Новая!',
    stations: ['ост. Домодедово', 'МЦД'],
    address: 'г. Домодедово, микр-н Авиационный, ул. Жиковского',
    prices: 6500000,
    squarePrice: 186000,
    images: ['/images/Apartment01.webp'],
  },
  {
    id: '6',
    number: '6',
    title: 'ЖК “Космос”. Домодедово. Дизайн, стиль. Новая!',
    rooms: '1',
    floor: '22',
    square: '29',
    building: 'K9',
    mortgage: '47000',
    text: 'Артикул 9-113. Продается квартира-студия с отделкой «white box» площадью 23.9 кв.м на 20 этаже 28-этажного корпуса 9 жилого комплекса ЖК “Космос” . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    categories: ['Квартиры'],
    subTitle: 'Дизайн, стиль. Новая!',
    stations: ['ост. Домодедово', 'МЦД'],
    address: 'г. Домодедово, микр-н Авиационный, ул. Жиковского',
    prices: 6500000,
    squarePrice: 186000,
    images: ['/images/Apartment01.webp'],
  },
  {
    id: '7',
    number: '7',
    title: 'ЖК “Космос”. Домодедово. Дизайн, стиль. Новая!',
    rooms: '1',
    floor: '22',
    square: '29',
    building: 'K9',
    mortgage: '47000',
    text: 'Артикул 9-113. Продается квартира-студия с отделкой «white box» площадью 23.9 кв.м на 20 этаже 28-этажного корпуса 9 жилого комплекса ЖК “Космос” . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    categories: ['Квартиры'],
    subTitle: 'Дизайн, стиль. Новая!',
    stations: ['ост. Домодедово', 'МЦД'],
    address: 'г. Домодедово, микр-н Авиационный, ул. Жиковского',
    prices: 6500000,
    squarePrice: 186000,
    images: ['/images/Apartment01.webp'],
  },
  {
    id: '8',
    number: '8',
    title: 'ЖК “Космос”. Домодедово. Дизайн, стиль. Новая!',
    rooms: '1',
    floor: '22',
    square: '29',
    building: 'K9',
    mortgage: '47000',
    text: 'Артикул 9-113. Продается квартира-студия с отделкой «white box» площадью 23.9 кв.м на 20 этаже 28-этажного корпуса 9 жилого комплекса ЖК “Космос” . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    categories: ['Квартиры'],
    subTitle: 'Дизайн, стиль. Новая!',
    stations: ['ост. Домодедово', 'МЦД'],
    address: 'г. Домодедово, микр-н Авиационный, ул. Жиковского',
    prices: 6500000,
    squarePrice: 186000,
    images: ['/images/Apartment01.webp'],
  },
  {
    id: '9',
    number: '9',
    title: 'ЖК “Космос”. Домодедово. Дизайн, стиль. Новая!',
    rooms: '1',
    floor: '22',
    square: '29',
    building: 'K9',
    mortgage: '47000',
    text: 'Артикул 9-113. Продается квартира-студия с отделкой «white box» площадью 23.9 кв.м на 20 этаже 28-этажного корпуса 9 жилого комплекса ЖК “Космос” . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    categories: ['Квартиры'],
    subTitle: 'Дизайн, стиль. Новая!',
    stations: ['ост. Домодедово', 'МЦД'],
    address: 'г. Домодедово, микр-н Авиационный, ул. Жиковского',
    prices: 6500000,
    squarePrice: 186000,
    images: ['/images/Apartment01.webp'],
  },
  {
    id: '10',
    number: '10',
    title: 'ЖК “Космос”. Домодедово. Дизайн, стиль. Новая!',
    rooms: '1',
    floor: '22',
    square: '29',
    building: 'K9',
    mortgage: '47000',
    text: 'Артикул 9-113. Продается квартира-студия с отделкой «white box» площадью 23.9 кв.м на 20 этаже 28-этажного корпуса 9 жилого комплекса ЖК “Космос” . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    categories: ['Квартиры'],
    subTitle: 'Дизайн, стиль. Новая!',
    stations: ['ост. Домодедово', 'МЦД'],
    address: 'г. Домодедово, микр-н Авиационный, ул. Жиковского',
    prices: 6500000,
    squarePrice: 186000,
    images: ['/images/Apartment01.webp'],
  },
  {
    id: '11',
    number: '11',
    title: 'ЖК “Космос”. Домодедово. Дизайн, стиль. Новая!',
    rooms: '1',
    floor: '22',
    square: '29',
    building: 'K9',
    mortgage: '47000',
    text: 'Артикул 9-113. Продается квартира-студия с отделкой «white box» площадью 23.9 кв.м на 20 этаже 28-этажного корпуса 9 жилого комплекса ЖК “Космос” . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    categories: ['Квартиры'],
    subTitle: 'Дизайн, стиль. Новая!',
    stations: ['ост. Домодедово', 'МЦД'],
    address: 'г. Домодедово, микр-н Авиационный, ул. Жиковского',
    prices: 6500000,
    squarePrice: 186000,
    images: ['/images/Apartment01.webp'],
  },
  {
    id: '12',
    number: '12',
    title: 'ЖК “Космос”. Домодедово. Дизайн, стиль. Новая!',
    rooms: '1',
    floor: '22',
    square: '29',
    building: 'K9',
    mortgage: '47000',
    text: 'Артикул 9-113. Продается квартира-студия с отделкой «white box» площадью 23.9 кв.м на 20 этаже 28-этажного корпуса 9 жилого комплекса ЖК “Космос” . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    categories: ['Квартиры'],
    subTitle: 'Дизайн, стиль. Новая!',
    stations: ['ост. Домодедово', 'МЦД'],
    address: 'г. Домодедово, микр-н Авиационный, ул. Жиковского',
    prices: 6500000,
    squarePrice: 186000,
    images: ['/images/Apartment01.webp'],
  },
  {
    id: '13',
    number: '13',
    title: 'ЖК “Космос”. Домодедово. Дизайн, стиль. Новая!',
    rooms: '1',
    floor: '22',
    square: '29',
    building: 'K9',
    mortgage: '47000',
    text: 'Артикул 9-113. Продается квартира-студия с отделкой «white box» площадью 23.9 кв.м на 20 этаже 28-этажного корпуса 9 жилого комплекса ЖК “Космос” . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    categories: ['Квартиры'],
    subTitle: 'Дизайн, стиль. Новая!',
    stations: ['ост. Домодедово', 'МЦД'],
    address: 'г. Домодедово, микр-н Авиационный, ул. Жиковского',
    prices: 6500000,
    squarePrice: 186000,
    images: ['/images/Apartment01.webp'],
  },
  {
    id: '14',
    number: '14',
    title: 'ЖК “Космос”. Домодедово. Дизайн, стиль. Новая!',
    rooms: '1',
    floor: '22',
    square: '29',
    building: 'K9',
    mortgage: '47000',
    text: 'Артикул 9-113. Продается квартира-студия с отделкой «white box» площадью 23.9 кв.м на 20 этаже 28-этажного корпуса 9 жилого комплекса ЖК “Космос” . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    categories: ['Квартиры'],
    subTitle: 'Дизайн, стиль. Новая!',
    stations: ['ост. Домодедово', 'МЦД'],
    address: 'г. Домодедово, микр-н Авиационный, ул. Жиковского',
    prices: 6500000,
    squarePrice: 186000,
    images: ['/images/Apartment01.webp'],
  },
];

type Data = {
  title: string;
  path: string;
}[];

type QuerierProps = {
  children: React.ReactNode;
  api?: string;
};

const Querier = ({ api, children }: QuerierProps) => {
  const { isLoading, error, data } = useQuery<Data, Error>('repoData', () =>
    fetch(api || '').then((res) => (api ? res.json() : fakeData))
  );

  const childrenWithNewProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { data: data });
    }
    return child;
  });

  if (isLoading)
    return (
      <div className={'h-full flex items-center justify-center'}>
        <UI.Loader className={`scale-[1.5]`} />
      </div>
    );

  if (error) return <div className={`text-white`}>{'An error has occurred: ' + error.message}</div>;

  return <>{childrenWithNewProps}</>;
};

type QueryContainerProps = {
  api?: string;
  children: React.ReactNode;
};

const QueryContainer = ({ api, children }: QueryContainerProps) => {
  return (
    <div className={`grow flex flex-col`}>
      <QueryClientProvider client={queryClient}>
        <Querier api={api}>{children}</Querier>
      </QueryClientProvider>
    </div>
  );
};

export default QueryContainer;
