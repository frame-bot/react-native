//rnfe => generate auto
import {View, Text, Image} from 'react-native';
import React from 'react';

const AppLogo = () => {
  return (
    <View>
      <Image
        source={require('../assets/images/cct_logo.png')}
        style={{width: 50, height: 50}}
        resizeMode='cover'
      />
    </View>
  );
};

export default AppLogo;
