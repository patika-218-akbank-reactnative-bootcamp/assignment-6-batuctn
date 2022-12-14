import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider, useSelector } from 'react-redux';

import AuthNavigaiton from './src/navigaiton/AuthNavigation';
import AppNavigaiton from './src/navigaiton/AppNavigaiton';
import { store } from './src/store/index';
import {
 
  SafeAreaProvider,
  
} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {NativeBaseProvider} from 'native-base';

const Contain = () => {
  const user = useSelector((state) => state.user.user);
  const {top}=useSafeAreaInsets()
  return (
    <SafeAreaProvider style={{paddingTop:top}}>
      <StatusBar style='dark' />
      <NavigationContainer>
        {user ? <AppNavigaiton /> : <AuthNavigaiton />}
     
        </NavigationContainer>
     </SafeAreaProvider>
   
  );
};

function App() {
  return (
    
    <SafeAreaProvider>
      <NativeBaseProvider>
    <Provider store={store}>
      <Contain />
    </Provider>
    </NativeBaseProvider>
    </SafeAreaProvider>
   
  
  );
}
export default App;