import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainAppStack from './src/navigation/MainAppStack'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import 'react-native-get-random-values';
import { WishlistProvider } from './src/context/WishlistContext'

const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
            <WishlistProvider>
                <MainAppStack />
            </WishlistProvider>
        </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})