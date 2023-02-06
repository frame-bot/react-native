/* eslint-disable no-alert */
import React from 'react';
import {Alert, Button, Text} from 'react-native';

type AppHeaderProps = {
  title: string;
  year?: number;
};

function AppHeader({title, year}: AppHeaderProps) {
  let isLogin = false;
  const showData = () => {
    // alert('SHOW ME');
    // console.log('Hello React Native');
    Alert.alert('React Native' , 'hello , form alert');
  };

  return (
    <>
      <Button color='#CE3919' title="Click me" onPress={showData} />
      <Text>{title} {year}</Text>
      {isLogin && <Text>Welocome John Doe</Text>}
    </>
  );
}

export default AppHeader;
