import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getColors } from '../globalStyles';

const { backgroundLight} = getColors();

export default function Card({children}) {
  const { card } = styles;
  return (
    <View style={card}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: backgroundLight,
  }
})