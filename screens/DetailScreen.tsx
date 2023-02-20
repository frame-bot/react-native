import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const DetailScreen = () => {
  const route = useRoute<any>()
  const navigation = useNavigation<any>();

  React.useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle: route.params?.title
    })
  })
  return (
    <View>
      <Text>{route.params?.id}</Text>
      <Text>{route.params?.title}</Text>
    </View>
  )
}

export default DetailScreen