import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function AppFooter() {
  const [title, setTitle] = useState('App Footer');
  const changeMe = () => {
    setTitle('success');
  };

  useEffect(() => {
    console.log('app footer render');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.bigBlue}>{title}</Text>
      <Button title="Change Me" onPress={changeMe} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 20,
  },
});
export default AppFooter;
