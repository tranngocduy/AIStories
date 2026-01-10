import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { styles } from './styles';

type ScrollAvoidingViewProps = { children: React.ReactNode, offset?: number }

const ScrollAvoidingView: React.FC<ScrollAvoidingViewProps> = ({ children, offset = 0 }) => {

  return (
    <KeyboardAvoidingView behavior={'padding'} style={styles.container} keyboardVerticalOffset={offset}>
      {children}
    </KeyboardAvoidingView>
  )

}

export default ScrollAvoidingView;
