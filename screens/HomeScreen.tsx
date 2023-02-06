import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from 'react-navigation-header-buttons';
import AppLogo from '../components/AppLogo';

const MaterialHeaderButton = (props: any) => (
  <HeaderButton IconComponent={Icon} iconSize={23} {...props}></HeaderButton>
);

const HomeScreen = () => {
  const navigation = useNavigation<any>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerTitle: () => <AppLogo></AppLogo>,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="logout"
            iconName="logout"
            color="white"
            onPress={() => console.log('Log out')}></Item>
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            color="white"
            onPress={() => console.log('Log out')}></Item>
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Icon name="home" size={30} color={'red'}></Icon>
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
