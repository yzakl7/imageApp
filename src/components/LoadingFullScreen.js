import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

const LoadingFullScreen = () => {
  return (
  <View style={styles.mainContainer}>
    <ActivityIndicator color="#000000" size={80}/>
  </View>
  )
}
export default LoadingFullScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  }
})