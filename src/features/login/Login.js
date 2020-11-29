import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Container from '../../components/Container';
import CustomButton from '../../components/CustomButton';
import CustomText from '../../components/CustomText';
import Input from '../../components/Input'
import { getColors } from '../../globalStyles';
import dictionary from '../../lang/dictionary';
import AuthContext from '../../navigation/AuthContext';

const {
  login: { EMAIL_LABEL, PASSWORD_LABEL, LOGIN, AUTH_ERROR },
} = dictionary();

const { danger, primary } = getColors();

export default function Login({}) {
  const { signIn } = React.useContext(AuthContext);  
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    if (isSigningIn) {
      signIn(formValues).catch(() => {
        setIsSigningIn(false)
        setError(AUTH_ERROR)
      })
    }
    return () => null
  }, [isSigningIn]);
  return (
    <Container>
      <Input
        title={EMAIL_LABEL}
        type="email"
        setValue={(username) => setFormValues({...formValues, username})}
        value={formValues.username}
      />
      <Input
        title={PASSWORD_LABEL}
        type="password"
        setValue={(password) => setFormValues({...formValues, password})}
        value={formValues.password}
      />
      <CustomButton onPress={() => setIsSigningIn(true)}>
        {
          isSigningIn 
            ? <ActivityIndicator color={primary}/> 
            : <CustomText>{LOGIN}</CustomText>
        }
      </CustomButton>
      <CustomText align="center" color={danger}>{error}</CustomText>
    </Container>
  );
}