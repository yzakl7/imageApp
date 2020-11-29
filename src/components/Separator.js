import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getColors } from '../globalStyles'

const { borderColor } = getColors();

export default function Separator() {
  const { separator } = styles;
  return (
    <View style={separator}/>
  )
};

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
    borderColor,
    marginTop: 8
  }
});
