// APARTMERNTS
import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Text, SectionTitle, Icons, UI } from 'components';
import { GALLERY } from 'configs/constants';

const queryClient = new QueryClient();

const fakeData = GALLERY.sections;

type Data = typeof GALLERY.sections

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
