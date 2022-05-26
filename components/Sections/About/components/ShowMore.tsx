import React from 'react';

type ShowMoreProps = {
  onClick: () => void;
};

const ShowMore = ({ onClick }: ShowMoreProps) => {
  const [hover, setHover] = React.useState<boolean>(false);
  return (
    <div
      style={{
        fontWeight: '700',
        fontSize: '22px',
        lineHeight: '26px',
      }}
      className={`rounded-full border-2 flex items-center justify-center w-[214px] h-[214px] border-[#52d8af] ${
        hover ? 'bg-[#52d8af]' : ''
      } transition-all cursor-pointer`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      Показать еще
    </div>
  );
};

export default ShowMore;
