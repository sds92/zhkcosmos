import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Icons, Logos } from 'components';
import SVGLocal from './components/svg.local';

import { CONTACTS } from 'configs/constants';
import styles from './Header.module.sass';

const classNames = {
  headerOuter: (a: boolean, b: boolean) =>
    `w-full ${a ? 'absolute' : `${b ? 'absolute' : 'relative shadow-md bg-white'}`} flex justify-center ${
      b ? 'pr-[17px]' : ''
    }`,
  header: styles.header + ` w-full flex justify-between relative z-[60]`,
  menuButtonNav:
    styles.close +
    ` mt-4 relative overflow-hidden rounded-full w-[52px] h-[52px] hover:h-[159px] pt-2.5 flex items-start justify-center bg-white cursor-pointer transition-all`,
  menuButtonHome:
    styles.button_left +
    ` bg-white shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer transition-all`,
};

type HeaderProps = {
  isNav: boolean;
  navClick: () => void;
  isHover: boolean;
  navHover: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ navClick, isNav, isHover, navHover }: HeaderProps) => {
  const router = useRouter();
  const isHome = router.route === '/' ? true : false;

  return (
    <header className={classNames.headerOuter(isHome, isNav)}>
      <div className={classNames.header}>
        <div className={`flex w-1/3`}>
          {isNav ? (
            <div
              onMouseEnter={() => navHover(true)}
              onMouseLeave={() => navHover(false)}
              onClick={navClick}
              className={classNames.menuButtonNav}
            >
              <div className={`absolute -rotate-90 top-[85px]`}>Закрыть</div>
              <SVGLocal.Close />
            </div>
          ) : (
            <div onClick={navClick} className={classNames.menuButtonHome}>
              <Icons.Menu />
            </div>
          )}
          <a title={'Позвонить'} className={`text-[22px] cursor-pointer font-bold text-white mt-7 ml-4`}>
            {CONTACTS.PHONE}
          </a>
        </div>

        <div
          className={` ${
            isNav ? `` : `${isHome ? styles.logoshadow + ' pb-10 px-10' : ' pb-2'} bg-white`
          } flex item-center justify-center`}
        >
          {isNav ? (
            <SVGLocal.LogoNav className={`cursor-pointer`} onClick={() => router.replace('/')} />
          ) : (
            <Logos.HeaderLogo
              className={`${isHome ? '' : 'h-[100px]'} cursor-pointer`}
              onClick={() => router.replace('/')}
            />
          )}
        </div>

        <div className={`w-1/3 flex justify-end pl-2`}>
          <div
            className={
              styles.button_right +
              ` text-center bg-white font-bold uppercase shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer transition-all`
            }
          >
            Выбрать свою квартиру
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
