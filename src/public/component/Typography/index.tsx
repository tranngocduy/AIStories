import React from 'react';
import { Text, TextProps } from 'react-native';

const Typography = ({ children, ...props }: TextProps) => {

  return <Text {...props} allowFontScaling={false}>{children}</Text>;

}

export default Typography;
