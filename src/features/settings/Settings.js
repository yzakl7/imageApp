import React from 'react'
import { View, Text } from 'react-native'
import Container from '../../components/Container'
import CustomButton from '../../components/CustomButton'
import CustomText from '../../components/CustomText'
import Separator from '../../components/Separator'
import { Typography } from '../../globalStyles'
import dictionary from '../../lang/dictionary'
import AuthContext from '../../navigation/AuthContext'
import ROUTES from '../../navigation/Routes'

const { settings: { TITLE } } = dictionary();
const { xl } = Typography;
const { settings: { LOG_OUT } } = dictionary();
const {
  MAIN_ROUTE,
  LOGGED_OUT_CONTENT: {
    LOGIN_ROUTE
  },
} = ROUTES 


export default function Settings({navigation}) {
  const { signOut } = React.useContext(AuthContext);
  const logOut = () => {
    signOut().then(() => {
      navigation.push(LOGIN_ROUTE)
    })
  }  
  return (
    <Container>
      <CustomText align="center" size={xl}>{TITLE}</CustomText>
      <Separator />
      <CustomButton onPress={logOut}>
        <CustomText>{LOG_OUT}</CustomText>
      </CustomButton>
    </Container>
  )
}
