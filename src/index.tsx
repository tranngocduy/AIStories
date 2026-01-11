import React, { useMemo } from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ViewToastInstance } from '@/instance';

import { styleProps } from '@/theme';

import AppNavigator from '@/routes';

const App: React.FC = () => {
  const memoAppNavigator = useMemo(() => <AppNavigator />, []);
  const memoViewToastInstance = useMemo(() => <ViewToastInstance />, []);

  return (
    <GestureHandlerRootView style={styleProps}>
      {memoAppNavigator}
      {memoViewToastInstance}
    </GestureHandlerRootView>
  )

}

export default App;
