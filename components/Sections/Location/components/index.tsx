import React from 'react';
import Section01 from './Section01';
import Section02 from './Section02';
import Section03 from './Section03';
import Section04 from './Section04';

type Keys = 0 | 1 | 2 | 3;

export const LocationSections: {[key: number]: any} = {
  0: Section01,
  1: Section02,
  2: Section03,
  3: Section04,
};

export { default as SVGLocal } from './svg.local';
