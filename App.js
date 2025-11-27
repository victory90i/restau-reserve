import React from 'react';
import { ClerkProvider } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

// You need to set your Clerk publishable key here
// Get it from your Clerk dashboard: https://dashboard.clerk.com
// You can also set it in a .env file as EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY || '';

// Token cache for Clerk using AsyncStorage
const tokenCache = {
  async getToken(key) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (err) {
      // Handle error
    }
  },
};

export default function App() {
  if (!publishableKey) {
    console.warn(
      'Missing Clerk Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env file'
    );
  }

  return (
    <ClerkProvider
      publishableKey={publishableKey}
      tokenCache={tokenCache}
    >
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ClerkProvider>
  );
}
