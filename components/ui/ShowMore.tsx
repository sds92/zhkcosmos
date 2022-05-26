import Link from 'next/link';
import React from 'react';
import styles from './ui.module.sass';
import {Icons} from 'components'

type ShowMoreProps = {
  href: string;
  text: string;
};

const ShowMore = ({ href = '', text = '' }: ShowMoreProps) => {
  return (
    <Link passHref href={href}>
      <div className={styles.showMore + ` flex items-center cursor-pointer`}><Icons.ArrowLeftM1/>{text}</div>
    </Link>
  );
};

export default ShowMore;
