import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Text, SectionTitle, Icons, UI } from 'components';
import { motion } from 'framer-motion';
import styles from './QueryContainers.module.sass';

const queryClient = new QueryClient();

const fakeData = [
  {
    title: 'Фото 1',
    path: '/images/gallery01.webp',
  },
  {
    title: 'Фото 2',
    path: '/images/news01.webp',
  },
  {
    title: 'Фото 3',
    path: '/images/gallery01.webp',
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
      return React.cloneElement(child, {data: data});
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

const FotoGallery = ({ api, children }: QueryContainerProps) => {
  return (
    <div className={`grow flex flex-col`}>
      <QueryClientProvider client={queryClient}>
        <Querier api={api}>{children}</Querier>
      </QueryClientProvider>
    </div>
  );
};

export default FotoGallery;
