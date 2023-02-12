import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppLogo from '../components/AppLogo';
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MaterialHeaderButton = (props: any) => (
  <HeaderButton IconComponent={Icon} iconSize={23} {...props}></HeaderButton>
);

const ProductScreen = () => {
  const navigation = useNavigation<any>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'สินค้า',
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
    <View>
      <Text>ProductScreen</Text>
    </View>
  );
};

export default ProductScreen;
