import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Spinner } from 'native-base'

const AppLoading = () => {
  return (
    <View style={{flex:1 , justifyContent:'center' , alignItems:'center'}}>
      <Spinner size='lg'></Spinner>
    </View>
  )
}

export default AppLoading
