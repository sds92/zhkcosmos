import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Text, SectionTitle, Icons, UI } from 'components';
import styles from './QueryContainers.module.sass';

const queryClient = new QueryClient();

const fakeData = [
  {
    title: 'Топ-10 банков со льготной ипотекой',
    date: '02. февраля',
  },
  {
    title: 'Топ-10 банков со льготной ипотекой',
    date: '02. февраля',
  },
  {
    title: 'Топ-10 банков со льготной ипотекой',
    date: '02. февраля',
  },
  {
    title: 'Топ-10 банков со льготной ипотекой',
    date: '02. февраля',
  },
];

type Data = {
  title: string;
  date: string;
}[];

type QuerierProps = {
  api?: string;
};

const Querier = ({ api }: QuerierProps) => {
  const { isLoading, error, data } = useQuery<Data, Error>('repoData', () =>
    fetch(api || '').then((res) => (api ? res.json() : fakeData))
  );

  if (isLoading)
    return (
      <div className={'h-full flex items-center justify-center'}>
        <UI.Loader className={`scale-[1.5]`} />
      </div>
    );

  if (error) return <>{'An error has occurred: ' + error.message}</>;

  return (
    <>
      {data?.map((dataItem, i) => {
        return (
          <div key={`data${i}`} className={`grow flex flex-col mt-8`}>
            <div className={styles.articleTitle + ` pb-2`}>{dataItem.title}</div>
            <div className={styles.articleDate}>{dataItem.date}</div>
            <div className={`self-end`}>
              <UI.ShowMore href='' text='&nbsp;&nbsp;Подробнее' />
            </div>
          </div>
        );
      })}
    </>
  );
};

type QueryContainerProps = {
  api?: string;
};

const M0 = ({ api }: QueryContainerProps) => {
  return (
    <div className={`grow flex flex-col`}>
      <QueryClientProvider client={queryClient}>
        <Querier api={api} />
      </QueryClientProvider>
    </div>
  );
};

export default M0;
