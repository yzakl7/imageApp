import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Typography } from '../globalStyles';
import { getColors } from '../globalStyles';

const { primary } = getColors();
const { md } = Typography;

export default function CustomText({
  children,
  color = primary,
  size: fontSize = md,
  align: textAlign = 'left' 
}) {
  return (
    <Text style={{ color, fontSize, textAlign }}>{children}</Text>
  )
}
