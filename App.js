
import * as React from 'react';
import firebase from '@react-native-firebase/app';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from "./screen/Login"
import TabBottom from "./navigate/tabBottom"
import ItemChat from "./screen/ItemChat"
const Stack = createNativeStackNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyBZkh8nkvgcv6HUWCftIJPkuSZANMvlVLU",
  authDomain: "tathuheo.firebaseapp.com",
  databaseURL: "https://tathuheo-default-rtdb.firebaseio.com",
  projectId: "tathuheo",
  storageBucket: "tathuheo.appspot.com",
  messagingSenderId: "65211879809",
  appId: "1:277423826521:android:baf9811bf6ad9c4cd9f348",
  measurementId: "277423826521"
};

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
       <Stack.Screen name="SignIn" component={SignInScreen} />
       <Stack.Screen name="ListUser" component={TabBottom} /> 
       <Stack.Screen name="ItemChat" component={ItemChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
