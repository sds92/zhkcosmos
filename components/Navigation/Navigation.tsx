import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Text } from 'components';
import LocalSVG from './components/local.svg';

import { NAVIGATION } from 'configs/constants';
import styles from './Navigation.module.sass';
import Link from 'next/link';

type Props = {
  show: boolean;
  hover: boolean;
  navClick: () => void;
};

const Navigation = ({ show, hover, navClick }: Props) => {
  if (show) {
    return (
      <nav className={`fixed z-50 h-full w-full bg-[#1a222b] pr-[17px] cursor-default`}>
        <div className={`z-0 absolute inset-0 translate-y-56`}>
          <div className={`relative w-full max-w-zhk_max mx-auto h-full flex items-end`}>
            {hover && (
              <div
                className={`absolute bottom-0 left-[427px] translate-x-3 -translate-y-3 ${hover ? ' ' : ''}`}
              >
                <Image
                  src={`/images/${NAVIGATION.images[1]}`}
                  width={580}
                  height={875}
                  layout={'fixed'}
                  objectFit={'cover'}
                />
              </div>
            )}
            <div
              className={`absolute bottom-0 left-[427px] z-10 ${
                hover ? ' opacity-0' : ''
              } transition-all duration-500`}
            >
              <Image
                src={`/images/${NAVIGATION.images[1]}`}
                width={580}
                height={875}
                layout={'fixed'}
                objectFit={'cover'}
              />
            </div>
            <div className={styles.title + ` z-[5] absolute whitespace-nowrap bottom-[630px] left-[298px]`}>
              {NAVIGATION.title[0]}
            </div>
            <div className={styles.title + ` z-[5] absolute whitespace-nowrap bottom-[516px] left-[780px]`}>
              {NAVIGATION.title[1]}
            </div>
            <div
              className={`absolute -bottom-0 left-[427px] ${
                hover ? ' z-20' : 'translate-x-3 -translate-y-3 z-0'
              } transition-all duration-500`}
            >
              <Image
                src={`/images/${NAVIGATION.images[0]}`}
                width={580}
                height={875}
                layout={'fixed'}
                objectFit={'cover'}
              />
            </div>
            <div className={`absolute -bottom-[1px] left-[427px] z-20 ${hover ? ' ' : ''} transition-all`}>
              <Image
                src={`/images/${NAVIGATION.images[2]}`}
                width={580}
                height={875}
                layout={'fixed'}
                objectFit={'cover'}
              />
            </div>
          </div>
        </div>

        <div className={`z-10 relative mt-[185px] w-full flex justify-between max-w-zhk_max mx-auto`}>
          <div className={`flex flex-col`}>
            <h2 className={styles.menu_title + ` mb-4`}>{NAVIGATION.menuTitle}</h2>
            {NAVIGATION.menuItems.map(([menuItem, route], i) => {
              return (
                <Link key={`menuitem${i}`} passHref href={route}>
                  <div className={styles.menu_item + ` py-1`} onClick={navClick}>
                    <p className={`cursor-pointer whitespace-nowrap w-min`}>{menuItem}</p>
                  </div>
                </Link>
              );
            })}
            <Text className={styles.copyright + ` mt-6`}>{NAVIGATION.copyright}</Text>
            <Text className={styles.politics + ` mt-4`}>{NAVIGATION.politics}</Text>
          </div>

          <div className={`flex flex-col items-end justify-between`}>
            <div className={`flex flex-col items-end`}>
              <h2 className={styles.account_title + ` mb-4`}>{NAVIGATION.accountTitle}</h2>
              {NAVIGATION.accountItems.map(([accountItem, icon], i) => {
                const Icon = LocalSVG[icon];
                return (
                  <div
                    key={`accountItem${i}`}
                    className={styles.account_item + ` py-1.5 flex items-center gap-2 cursor-pointer`}
                  >
                    <Icon />
                    {accountItem}
                  </div>
                );
              })}
            </div>
            <Text className={styles.madein}>{NAVIGATION.madein}</Text>
          </div>
        </div>
      </nav>
    );
  } else {
    return null;
  }
};

export default Navigation;
