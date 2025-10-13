import React, { useMemo } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { createBottomTabNavigator, BottomTabNavigationOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { QueryClientProvider, QueryClient, QUERY_OPTIONS } from '@/useQuery/constants';

import { TabNavigator } from '@/components/TabNavigator';

import { Library } from '@/screens/Tab.Library';
import { Dashboard } from '@/screens/Tab.Dashboard';
import { SavedStory } from '@/screens/Tab.SavedStory';
import { UserProfile } from '@/screens/Tab.UserProfile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const tabOptions: BottomTabNavigationOptions = { headerShown: false, lazy: false, sceneStyle: { backgroundColor: '#FFFFFF' } };
const stackOptions: NativeStackNavigationOptions = { headerShown: false, animation: 'slide_from_right', contentStyle: { backgroundColor: '#FFFFFF' } };

const AppTab = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions} tabBar={(props: BottomTabBarProps) => <TabNavigator {...props} />}>
      <Tab.Screen name='Dashboard' component={Dashboard} />
      <Tab.Screen name='Library' component={Library} />
      <Tab.Screen name='SavedStory' component={SavedStory} />
      <Tab.Screen name='UserProfile' component={UserProfile} />
    </Tab.Navigator>
  )
}

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen name='AppTab' component={AppTab} />
    </Stack.Navigator>
  )
}

const AppNavigator = () => {

  const queryClient = useMemo(() => new QueryClient(QUERY_OPTIONS), []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </QueryClientProvider>
  )

}

export default AppNavigator;
