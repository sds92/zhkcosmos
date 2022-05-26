import React from 'react';
import { useRouter } from 'next/router';

import { Icons, Logos } from 'components';
import LocalSVG from './components/local.svg';

import { CONTACTS } from 'configs/constants';
import styles from './Header.module.sass';

type HeaderProps = {
  isNav: boolean;
  navClick: () => void;
  isHover: boolean;
  navHover: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ navClick, isNav, isHover, navHover }: HeaderProps) => {

  const router = useRouter();
  const isHome = router.route === '/' ? true : false

  return (
    <header className={`w-full ${isHome ? 'absolute' : `${isNav ? 'absolute' : 'relative shadow-md bg-white'}`} flex justify-center ${isNav ? 'pr-[17px]' : ''}`}>
      <div className={styles.header + ` w-full flex justify-between relative z-[60]`}>

        <div className={`flex w-1/3`}>
          {isNav ? (
            <div
              onMouseEnter={() => navHover(true)}
              onMouseLeave={() => navHover(false)}
              onClick={navClick}
              className={
                styles.close +
                ` mt-4 relative overflow-hidden rounded-full w-[52px] h-[52px] hover:h-[159px] pt-2.5 flex items-start justify-center bg-white cursor-pointer transition-all`
              }
            >
              <div className={`absolute -rotate-90 top-[85px]`}>Закрыть</div>
              <LocalSVG.Close />
            </div>
          ) : (
            <div
              onClick={navClick}
              className={
                styles.button_left +
                ` bg-white shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer transition-all`
              }
            >
              <Icons.Menu />
            </div>
          )}
          <a title={'Позвонить'} className={`cursor-pointer font-bold text-white mt-8 ml-4`}>
            {CONTACTS.PHONE}
          </a>
        </div>

        <div
          className={
            styles.logo + ` ${isNav ? `` : `${isHome && styles.logoshadow} bg-white`} flex item-center justify-center`
          }
        >
          {isNav ? <LocalSVG.LogoNav /> : <Logos.HeaderLogo />}
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
