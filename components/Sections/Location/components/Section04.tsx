import React from 'react';

type Section04Props = {
  data: {
    title: string;
    left: string[];
    right: {
      text?: string | undefined;
      iframe?: string | undefined;
      images?: string[] | undefined;
    };
  };
};

const Section04 = ({data}: Section04Props) => {
  return <div className={`w-full h-full`}>
    <iframe src={data.right.iframe} width='100%' height='100%' frameBorder='0' allowFullScreen={true}></iframe>
  </div>;
};

export default Section04;
