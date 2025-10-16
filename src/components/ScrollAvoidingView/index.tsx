import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { styles } from './styles';

type TScrollAvoidingViewProps = { children: React.ReactNode, offset?: number }

export const ScrollAvoidingView: React.FC<TScrollAvoidingViewProps> = ({ children, offset = 0 }) => {

  return (
    <KeyboardAvoidingView behavior={'padding'} style={styles.container} keyboardVerticalOffset={offset}>
      {children}
    </KeyboardAvoidingView>
  )

}
