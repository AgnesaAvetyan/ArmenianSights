import Logo from '../../assets/images/Logo.png';
import React from 'react';
import { Image } from 'react-native';

const LogoComponent = () => {
    return (
      <Image source={Logo} />
    );
  };
  
  export default LogoComponent;