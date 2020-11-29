import * as React from 'react'
import { View, Text } from 'react-native'
import LoadingFullScreen from '../components/LoadingFullScreen';
import { getStorageState, setStorageState } from '../utilities/userDataStorage';
import ROUTES from '../navigation/Routes';
import Navigator from '../navigation/Navigator';
import AuthContext from '../navigation/AuthContext';
import { login, logOut } from '../api/login';

const {
  LOGGED_IN_CONTENT: { HOME_ROUTE }
} = ROUTES 

export default function Main() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  const authContext = React.useMemo(
    () => ({
      signIn: data => {
        return new Promise((resolve, reject) => {
          login(data, dispatch)
            .then(() => resolve())
            .catch(() => reject())
        })
      },
      signOut: () => {
        return new Promise((resolve) => {
          logOut(dispatch)
        })
      },
    }),
    []
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await getStorageState();
        dispatch({ type: 'RESTORE_TOKEN', token: userToken });
      } catch (e) {
        dispatch({ type: 'SIGN_OUT', token: null });
        // Restoring token failed
      }
      setIsLoading(false)
    };
    bootstrapAsync();
  }, []);

  if (isLoading) return <LoadingFullScreen />

  return (
    <AuthContext.Provider value={authContext}>
      <Navigator isLoggedIn={!!state.userToken}/>
    </AuthContext.Provider>
  );

}
