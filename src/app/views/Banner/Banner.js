import React from 'react';

import whlogo from '../../assets/writershelp_NOW_ML_logo_rgb-shear_reverse.png';
import banner from './banner.css';

const Banner = () => {
  return (
    <header className={ banner['top-header'] }>
      <img className={ banner.logo } src={whlogo} />
    </header>
  );
};

export default Banner;
