import {View, Text, ScrollView, ImageBackground} from 'react-native';
import React from 'react';

const MenuScreen = ({navigation}: any) => {
  return (
    <ScrollView>
      <ImageBackground
        source={{uri: 'https://picsum.photos/300/180'}}
        style={{
          flex: 1,
          width: undefined,
          height: 180,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', marginBottom: 20, fontSize: 24}}>เมนูหลัก</Text>
      </ImageBackground>
    </ScrollView>
  );
};

export default MenuScreen;
