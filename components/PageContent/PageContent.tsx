import React from 'react';

type PageContentProps = {
  children: React.ReactNode;
};

const PageContent = ({ children }: PageContentProps) => {
  return <>{children}</>;
};

export default PageContent;
