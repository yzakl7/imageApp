import * as React from 'react'
import LoadingFullScreen from '../components/LoadingFullScreen';
import { getStorageState } from '../utilities/userDataStorage';
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
    // this is for memoization, so the app wont need to perform actions every time
    // as result will be "remebered"
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
        // Restoring token failed, sign out action dispatched
      }
      setIsLoading(false)
    };
    bootstrapAsync();
  }, []);

  if (isLoading) return <LoadingFullScreen />

  // context is really helpful to pass data to non direct child
  return (
    <AuthContext.Provider value={authContext}> 
      <Navigator isLoggedIn={!!state.userToken}/>
    </AuthContext.Provider>
  );

}
