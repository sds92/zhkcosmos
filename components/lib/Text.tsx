import React from 'react';

type TextProps = {
  children: string | string[];
  className?: string;
  style?: React.CSSProperties;
};

export default function Text({ children, ...props }: TextProps) {
  function createMarkup(data: string) {
    return { __html: data };
  }

  if (Array.isArray(children)) {
    return (
      <>
        {children.map(
          (child, i) =>
            child && <p key={`child${i}`} {...props} dangerouslySetInnerHTML={createMarkup(child)}></p>
        )}
      </>
    );
  }

  return (
    <React.Fragment>
      {children && <p {...props} dangerouslySetInnerHTML={createMarkup(children)}></p>}
    </React.Fragment>
  );
}
