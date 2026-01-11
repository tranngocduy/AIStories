import React, { useEffect, useMemo } from 'react';
import { StatusBar } from 'react-native';

import { RootSiblingParent } from 'react-native-root-siblings';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { createBottomTabNavigator, BottomTabNavigationOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { navigationRef } from '@/useHooks/useNavigation';
import { QueryClientProvider, QueryClient, QUERY_OPTIONS } from '@/useQuery/constants';

import Library from '@/screens/Tab.Library';
import Dashboard from '@/screens/Tab.Dashboard';
import SavedStory from '@/screens/Tab.SavedStory';
import UserProfile from '@/screens/Tab.UserProfile';

import StoryDetail from '@/screens/StoryDetail';
import StoryReview from '@/screens/StoryReview';

import UserSignIn from '@/screens/UserSignIn';
import UserSignUp from '@/screens/UserSignUp';

import TabNavigator from '@/component/TabNavigator';

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

      <Stack.Screen name='StoryDetail' component={StoryDetail} />
      <Stack.Screen name='StoryReview' component={StoryReview} />

      <Stack.Screen name='UserSignIn' component={UserSignIn} />
      <Stack.Screen name='UserSignUp' component={UserSignUp} />
    </Stack.Navigator>
  )
}

const AppNavigator = () => {

  const queryClient = useMemo(() => new QueryClient(QUERY_OPTIONS), []);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RootSiblingParent>
        <NavigationContainer ref={navigationRef}>
          <AppStack />
        </NavigationContainer>
      </RootSiblingParent>
    </QueryClientProvider>
  )

}

export default AppNavigator;