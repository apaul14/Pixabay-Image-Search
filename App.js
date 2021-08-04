import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
//import { StatusBar } from 'expo-status-bar'

import { ImageProvider } from './context'

import  Main  from './components/Main'
import SingleImageView from './components/SingleImageView'

const Stack = createStackNavigator()

const App = () => {
  return (
    <ImageProvider>
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Main'>
            <Stack.Screen name='Select An Image' component={Main} />
            <Stack.Screen name='Image Details' component={SingleImageView} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageProvider>
  )
}
{/* <SafeAreaView style={styles.container}>
  <Text>Select an image to learn more</Text>
  <StatusBar style="auto" />
  <Main/>
</SafeAreaView> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
