import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getColors, Typography } from '../globalStyles';
import dictionary from '../lang/dictionary';
import CustomText from './CustomText';

const { md } = Typography;
const { primary } = getColors();
const { errorScreen: { ERROR_MESSAGE } } = dictionary();

const ErrorScreen = () => {
  return (
  <View style={styles.mainContainer}>
    <CustomText align="center">
      <Ionicons name="bug-outline" size={80} color={primary} />
    </CustomText>
    <CustomText align="center">{ERROR_MESSAGE}</CustomText>
  </View>
  )
};

export default ErrorScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
  }
})