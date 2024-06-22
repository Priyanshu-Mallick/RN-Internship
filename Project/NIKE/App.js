import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/components/BottomTab';
import { CartProvider } from './src/services/CartContext';
import Routes from './src/routes';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Routes />
        <Toast />
      </NavigationContainer>
    </CartProvider>
  );
}
