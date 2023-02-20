import {View, FlatList, ListRenderItem} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AppLogo from '../components/AppLogo';
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Product} from '../app-types/product.type';
import {useFocusEffect} from '@react-navigation/native';
import { getProduct } from '../services/product.service';
import { Text } from 'native-base';

const MaterialHeaderButton = (props: any) => (
  <HeaderButton IconComponent={Icon} iconSize={23} {...props}></HeaderButton>
);

const ProductScreen = () => {
  const navigation = useNavigation<any>();
  const [product, setProduct] = useState<Product[]>([]);

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

  const getAllproduct = async ()=>{
    const response = await getProduct();//from service
    setProduct(response.data.data);
  };

  useFocusEffect(
    React.useCallback(() => {
      getAllproduct();
  },[]));

  const renderItem:ListRenderItem<Product>  = ({item})=>{
    return (<Text>{item.title} {item.detail}</Text>)
  }

  return (
    <View>
      {/* <Text>{JSON.stringify(product)}</Text> */}
      <FlatList 
      data={product} 
      keyExtractor={(item:Product , index:number) =>(item.id.toString())}
      renderItem={renderItem}
      >
      </FlatList>
    </View>
  );
};

export default ProductScreen;
