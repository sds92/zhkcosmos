import React from 'react'

import { SectionTitle, Text, Icons, QueryContainers } from 'components';
import { APARTMENTS_SM } from 'configs/constants';

import styles from './Apartments.module.sass';

type ApartmentsSMProps = {}

const ApartmentsSM = ({}: ApartmentsSMProps) => {
  return (
    <section className={`flex flex-col min-h-screen h-full`}>
        <SectionTitle title={APARTMENTS_SM.title} />
        <div className={`grow max-w-zhk_max mx-auto w-full`}>
            <QueryContainers.Appartments/>
                {/* {(appartments) => {
                    return <Appartment/>
                }} */}
            {/* </QueryContainers.Appartments> */}
        </div>
    </section>
  )
}

export default ApartmentsSM