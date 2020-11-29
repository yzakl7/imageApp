const dictionary = () => {
  return { ...english }
}

export default dictionary

const english = {
  bottomBar: {
    SETTINGS: 'Settings',
    HOME: 'Home'
  },
  home: {
    TITLE: 'Home',
  },
  login: {
    LOGIN: 'Log in',
    EMAIL_LABEL: 'Email',
    PASSWORD_LABEL: 'Password',
    EMPY_ERROR_MSG: "Can't be empy",
    AUTH_ERROR: "Authentication error, please check your credentials"
  },
  settings: {
    LOG_OUT: 'Log out',
    TITLE: 'Settings',
  },
  errorScreen: {
    ERROR_MESSAGE: 'Oh, an error occurred, please login again, you can sign out from settings'
  },
}