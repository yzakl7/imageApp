import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Container({children}) {
  const { container } = styles;
  return (
    <View style={container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 0
  }
})