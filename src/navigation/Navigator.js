import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../features/home/Home';
import Login from '../features/login/Login';
import Settings from '../features/settings/Settings';
import ROUTES from './Routes';
import { getColors, Typography } from '../globalStyles';
import dictionary from '../lang/dictionary';

const { active, inactive } = getColors();
const { icon } = Typography;

const {
  MAIN_ROUTE,
  LOGGED_OUT_CONTENT: {
    LOGIN_ROUTE
  },
  LOGGED_IN_CONTENT: {
    LOGGED_IN_CONTENT_ROUTE,
    HOME_ROUTE,
    SETTINGS_ROUTE
  }
} = ROUTES 

const { bottomBar: { SETTINGS, HOME } } = dictionary()

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const LoggedInContent = () => {
  return (
    <Tab.Navigator
      tabBarPosition={'bottom'}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === HOME_ROUTE) {
            iconName = focused
              ? 'planet'
              : 'planet-outline';
          } else if (route.name === SETTINGS_ROUTE) {
            iconName = focused 
              ? 'hammer' 
              : 'hammer-outline';
          }
          return <Ionicons name={iconName} size={icon} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: active,
        inactiveTintColor: inactive,
        showIcon: true,
        renderIndicator: () => null,
      }}
    >
      <Tab.Screen options={{title: HOME}} name={HOME_ROUTE} component={Home}/>
      <Tab.Screen options={{title: SETTINGS}} name={SETTINGS_ROUTE} component={Settings}/>
    </Tab.Navigator>
  )
}
/* React navigator changed implementation as of v5 */
const Navigator = ({isLoggedIn}) => {
  const screenOptions = {
    headerShown: false,
  }
  // now this is the proper way of hiding routes if logged of
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions} name={MAIN_ROUTE}>
          {isLoggedIn ? (
            <Stack.Screen name={LOGGED_IN_CONTENT_ROUTE} component={LoggedInContent}/>
          ) : (
            <Stack.Screen name={LOGIN_ROUTE} component={Login} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigator;
