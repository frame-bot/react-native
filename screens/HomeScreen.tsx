import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="About Us"
        onPress={() => {
          navigation.navigate('AboutUs');
        }}></Button>
    </View>
  );
};

export default HomeScreen;
