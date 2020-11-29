import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { getColors } from '../globalStyles';

const { elementBackground } = getColors();

export default function CustomButton({children, disabled, onPress, style}) {
  const { button } = styles;
  if (disabled) return  (
    <View style={[button, {...style}]}>
      {children}
    </View>
  )
  return (
    <TouchableOpacity style={[button, {...style}]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: elementBackground,
    marginVertical: 8,
    minWidth: 200,
    alignItems: 'center',
    borderRadius: 3
  },
  
})