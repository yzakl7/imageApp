# imageApp
This application is made only as a test, fetches a list of images and has a screen for configuration ( only logout up to now ), is prepared for having multiple languages though it has only English at the moment, the same for dark mode

# Content:
- Login system
- API consumption
- Listing
- Persist login

# How to run it: 
*it is assumed the device is connected and environment properly set and command line at the root of project's folder
- clone the repo
- run command: npm install, to install dependencies
- run command: npm start, to start metro server
- run command: react-native run-android, to install on an Android device
- run command: adb reverse tcp:8081 tcp:8081 *if necessary

# Dependencies
"@react-native-community/masked-view": "^0.1.10",
"@react-navigation/bottom-tabs": "^5.11.2",
"@react-navigation/material-top-tabs": "^5.3.10",
"@react-navigation/native": "^5.8.10",
"@react-navigation/stack": "^5.12.8",
"axios": "^0.21.0",
"react": "16.13.1",
"react-native": "0.63.3",
"react-native-axios": "^0.17.1",
"react-native-gesture-handler": "^1.9.0",
"react-native-reanimated": "^1.13.2",
"react-native-safe-area-context": "^3.1.9",
"react-native-screens": "^2.15.0",
"react-native-secure-storage": "^0.1.2",
"react-native-tab-view": "^2.15.2",
"react-native-vector-icons": "^7.1.0",
"react-navigation": "^4.4.3"
