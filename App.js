import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-native-paper'
import COLORS from './src/consts/colors';
import DetailsScreen from './src/views/screens/DetailsScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens'

StatusBar.setBarStyle('light-content')
const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
    <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="BoardScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
          <Stack.Screen name="Home" component={BottomNavigator} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
  




