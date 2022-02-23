import React from 'react'
import TodoApp from './Components/Screen'
import { View,Text } from 'react-native'
import { Provider } from 'react-redux'
import store from './Components/Store/store'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Home from './Components/Screen/home';
import Contact from './Components/Screen/contact'

export default function App() {
  const Stack = createStackNavigator();
  return (

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home}></Stack.Screen>
    //     <Stack.Screen name="Contact" component={Contact}></Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Provider store={store}>
          <TodoApp />
    </Provider>
      
      
  )
}
