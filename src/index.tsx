import React, { useMemo } from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { styleProps } from '@/theme';

import AppNavigator from '@/routes';

const App: React.FC = () => {
  const memoAppNavigator = useMemo(() => <AppNavigator />, []);

  return (
    <GestureHandlerRootView style={styleProps}>
      {memoAppNavigator}
    </GestureHandlerRootView>
  )

}

export default App;
