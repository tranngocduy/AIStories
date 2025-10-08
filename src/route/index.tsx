import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';
import { QueryClientProvider, QueryClient, QUERY_OPTIONS } from '@app-useHook/query/constants';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import Dashboard from '@app-screen/Tab.Dashboard';

const Stack = createNativeStackNavigator();

const stackOptions: NativeStackNavigationOptions = { headerShown: false, animation: 'slide_from_right' };

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen name='Dashboard' component={Dashboard} />
    </Stack.Navigator>
  )
}

const AppNavigator = () => {

  const queryClient = useMemo(() => new QueryClient(QUERY_OPTIONS), []);

  return (
    <QueryClientProvider client={queryClient}>
      <RootSiblingParent>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </RootSiblingParent>
    </QueryClientProvider>
  )
}

export default AppNavigator;
