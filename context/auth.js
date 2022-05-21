import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from "react-native";
import Toast from 'react-native-toast-message'
const authContext = createContext();


const ThemeProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [dataLogin , setDataLogin] = useState('');
    const getAuth = async () => {
        try {
            setIsLoading(true)
            const auth = await AsyncStorage.getItem('auth');
            setDataLogin(auth);
            setIsLoading(false)
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Error auth',
                text1: 'Vui lòng đăng nhập lại',
                visibilityTime: 500,
                autoHide: true
            })
            setIsLoading(false)
        }

    }
    
    useEffect(() => {
        getAuth();
      }, []);
      return (
        <authContext.Provider value={{ dataLogin, isLoading }}>
          {children}
        </authContext.Provider>
      );
}

export const useAuth = () => useContext(authContext);
export default ThemeProvider;