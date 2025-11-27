import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '@clerk/clerk-expo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

const ONBOARDING_KEY = '@has_completed_onboarding';

const AppNavigator = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const value = await AsyncStorage.getItem(ONBOARDING_KEY);
        if (value !== null) {
          setHasCompletedOnboarding(true);
        }
      } catch (error) {
        console.error('Error checking onboarding status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkOnboardingStatus();
  }, []);

  const handleOnboardingComplete = async () => {
    try {
      await AsyncStorage.setItem(ONBOARDING_KEY, 'true');
      setHasCompletedOnboarding(true);
    } catch (error) {
      console.error('Error saving onboarding status:', error);
    }
  };

  // Wait for Clerk and onboarding check to load
  if (!isLoaded || isLoading) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    );
  }

  // Determine the initial route based on state
  const getInitialRouteName = () => {
    if (!hasCompletedOnboarding) return 'Onboarding';
    if (!isSignedIn) return 'Auth';
    return 'Main';
  };

  return (
    <Stack.Navigator 
      initialRouteName={getInitialRouteName()}
      screenOptions={{ 
        headerShown: false,
        animation: 'fade',
      }}
    >
      {/* Always include Onboarding screen, but it only shows if not completed */}
      <Stack.Screen name="Onboarding">
        {(props) => (
          <OnboardingScreen 
            {...props} 
            onComplete={handleOnboardingComplete}
          />
        )}
      </Stack.Screen>
      
      {/* Always include Auth screen - it will show after onboarding */}
      <Stack.Screen 
        name="Auth" 
        component={AuthNavigator}
        options={{
          animationTypeForReplace: 'push',
        }}
      />
      
      {/* Always include Main screen - it will show after sign in */}
      <Stack.Screen 
        name="Main" 
        component={MainNavigator}
        options={{
          animationTypeForReplace: 'pop',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;