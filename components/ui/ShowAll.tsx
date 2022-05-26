import Link from 'next/link';
import React from 'react';
import styles from './ui.module.sass';
import {Icons} from 'components'

type ShowAllProps = {
  href: string;
  text: string;
};

const ShowAll = ({ href = '', text = '' }: ShowAllProps) => {
  return (
    <Link passHref href={href}>
      <div className={styles.showAllText + ` flex items-center my-[25px] cursor-pointer`}>{text}<Icons.ChevronRight/></div>
    </Link>
  );
};

export default ShowAll;
