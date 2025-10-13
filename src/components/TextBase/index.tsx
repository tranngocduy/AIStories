import React from 'react';
import { Text, TextProps } from 'react-native';

const TextBase: React.FC<TextProps> = ({ children, ...props }) => {

  return <Text {...props} allowFontScaling={false}>{children}</Text>;

}

export default TextBase;
