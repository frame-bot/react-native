/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

function App() {
  let title = 'React.js';
  let isShow: boolean;
  isShow = true;
  let age = 10;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('./assets/images/react_logo.png')}></Image>
      <Image
        source={{uri: 'https:codingthailand.com/site/img/book1.png'}}
        style={{width: 200, height: 200}}></Image>
      <AppHeader title={'App Header 1'} />
      <AppHeader title={'App Header 2'} year={2023} />
      <Text>Hello REACT NATIVE</Text>
      <Text>
        Hello {title + ' ' + age} {isShow ? 'True' : 'False'}
      </Text>
      <AppFooter />
    </View>
  );
}
export default App;
