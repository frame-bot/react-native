import {View, FlatList, ListRenderItem} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Product} from '../app-types/product.type';
import {useFocusEffect} from '@react-navigation/native';
import {getProduct} from '../services/product.service';
import {
  Avatar,
  Box,
  HStack,
  Pressable,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import AppLoading from '../components/AppLoading';

const MaterialHeaderButton = (props: any) => (
  <HeaderButton IconComponent={Icon} iconSize={23} {...props}></HeaderButton>
);

const ProductScreen = () => {
  const navigation = useNavigation<any>();
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error , setError] = useState(null);

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

  const getAllproduct = async () => {
    try {
      setLoading(true);
      const response = await getProduct(); //from service
      setProduct(response.data.data);
    } catch (error:any) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getAllproduct();
    }, []),
  );

  const renderItem: ListRenderItem<Product> = ({item}) => {
    return (
      <>
        <Pressable
          onPress={() => {
            navigation.navigate('Detail', {
              id: item.id,
              title: item.title,
            });
          }}>
          <Box
            borderBottomWidth={1}
            borderColor="gray.200"
            pl={['4', '4']}
            pr={['5', '5']}
            py="5"
          />
          <HStack space={[2, 3]} justifyContent="space-between">
            <Avatar size="48px" source={{uri: item.picture}}></Avatar>
            <VStack>
              <Text bold>{item.title}</Text>
              <Text>{item.detail}</Text>
            </VStack>
            <Spacer></Spacer>
          </HStack>
        </Pressable>
      </>
    );
  };

  //error
  if(error){
    return <Text>{JSON.stringify(error)}</Text>
  }

  //loading
  if (loading) {
    return (
      <View>
        <AppLoading></AppLoading>
      </View>
    );
  }


  return (
    <View>
      {/* <Text>{JSON.stringify(product)}</Text> */}
      <FlatList
        data={product}
        keyExtractor={(item: Product, index: number) => item.id.toString()}
        renderItem={renderItem}
        onRefresh={()=>{
          getAllproduct();
        }}
        refreshing={loading}>

        </FlatList>
    </View>
  );
};

export default ProductScreen;
