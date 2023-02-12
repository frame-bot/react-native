import {View, Text} from 'react-native';
import {Button, Icon as NBIcon, Center, VStack, HStack} from 'native-base';
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
          <Item title="logout" iconName="logout" color="white"></Item>
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            color="white"
            onPress={() => navigation.openDrawer()}></Item>
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <Center>
      <VStack space={5} alignItems="center">
        <HStack>
          <Icon name="home" size={30} color={'red'}></Icon>
          <Text>HomeScreen</Text>
        </HStack>
        <Button
          leftIcon={<NBIcon as={Icon} name="home" size="lg"></NBIcon>}
          size="lg"
          width="40"
          colorScheme="success"
          onPress={() => {
            navigation.navigate('AboutUs');
          }}>
          About Page
        </Button>
      </VStack>
    </Center>
  );
};

export default HomeScreen;
