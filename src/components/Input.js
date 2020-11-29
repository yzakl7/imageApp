import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { getColors, Typography } from '../globalStyles'
import dictionary from '../lang/dictionary'
import CustomText from './CustomText'

const { login: { EMPY_ERROR_MSG } } = dictionary()
const { danger, backgroundLight, borderColor } = getColors();
const { md } = Typography;

export default function Input({
  isMandatory = true, title, type, setValue, value
}) {
  const [error, setError] = useState(false);
  const { input, inputContainer } = styles;
  return (
    <View style={inputContainer}>
      <CustomText>{title}</CustomText>
      <TextInput
        style={input}
        secureTextEntry={type === 'password'}
        textContentType={type === 'email' ? 'emailAddress' : type}
        autoCompleteType={type}
        onChangeText={(text) => {setValue(text); setError(false)}}
        value={value}
        onBlur={() => {
          if (!value && isMandatory) setError(EMPY_ERROR_MSG)
        }}
      />
      <CustomText color={danger}>{error}</CustomText>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: backgroundLight,
    borderWidth: 2,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderColor,
    fontSize: md,
    marginTop: 4
  },
  inputContainer: {
    marginBottom: 8
  }
})