import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';


export function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.textPrimary}>Loading user data...</Text>
      <ActivityIndicator color='#89FFDB' />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  textPrimary: {
    color: '#ffffff',
    fontSize: 25,
    fontFamily: 'PoppinsExtraBold',
    lineHeight: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
