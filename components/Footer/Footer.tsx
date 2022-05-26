import React from 'react';
import Image from 'next/image';
import { UI } from 'components';
import { FOOTER } from 'configs/constants';
import styles from './Footer.module.sass';

type FooterProps = {
  hidden: boolean
};

const Footer = ({hidden}: FooterProps) => {
  return (
    <footer hidden={hidden} className={`bg-[#1a222b] h-[934px] relative`}>
      <div className={`w-1/2 absolute`}>
        <iframe src={FOOTER.iframe} width='100%' height='857' frameBorder='0' allowFullScreen={true}></iframe>
      </div>
      <div className={`w-full flex h-full max-w-zhk_max mx-auto`}>
        <div className={`w-1/2`}></div>
        <div className={`w-1/2 h-[857px] text-white flex flex-col p-4`}>
          <div>
            <h2 className={styles.title + ` `}>{FOOTER.title}</h2>
            <p className={styles.workinghoars + ` py-2 `}>{FOOTER.workingHoars}</p>
            <p className={styles.address + ` pb-2 `}>{FOOTER.address}</p>
            <a className={styles.phone_email + ` pb-2 `}>{FOOTER.phone}</a>
            <p className={styles.phone_email + ` pb-2 `}>{FOOTER.email}</p>
          </div>
          <div className={`w-full relative grow`}>
            <Image
              src={`/images/${FOOTER.image}`}
              width={682}
              height={440}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <UI.Form
            submitButton={
              <input type={'submit'} className={`border-2 w-[336px] text-center py-2 mt-2 cursor-pointer`} value={'Заказать звонок'}/>
            }
          >
            <UI.InputFooter className={`w-full h-[56px] mt-4 mb-2`}/>
            <UI.InputFooter className={`w-full h-[56px] mt-2`} />
          </UI.Form>
        </div>
      </div>
      <div className={`w-full`}></div>
    </footer>
  );
};

export default Footer;
