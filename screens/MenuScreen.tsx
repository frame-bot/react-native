import {View, ScrollView, ImageBackground} from 'react-native';
import React from 'react';
import {
  Box,
  Divider,
  Heading,
  HStack,
  Icon as NBIcon,
  VStack,
  Text,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

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
        <Text style={{color: 'white', marginBottom: 20, fontSize: 24}}>
          เมนูหลัก
        </Text>
      </ImageBackground>
      <Box>
        <Heading p="4">Main Menu</Heading>

        <VStack p="4" justifyContent="space-between">
          <HStack
            space="4"
            p="4"
            alignItems="center"
            justifyContent="flex-start">
            <NBIcon as={Icon} name="home" size="lg"></NBIcon>
            <Text bold fontSize="md">
              หน้าหลัก
            </Text>
          </HStack>
          <Divider></Divider>
          <HStack
            space="4"
            p="4"
            alignItems="center"
            justifyContent="flex-start">
            <NBIcon as={Icon} name="star" size="lg"></NBIcon>
            <Text bold fontSize="md">
              สินค้า
            </Text>
          </HStack>
          <Divider></Divider>
          <Text>Version 1.0.0</Text>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default MenuScreen;
