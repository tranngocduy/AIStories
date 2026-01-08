import React, { forwardRef } from 'react';
import { Text, TextProps } from 'react-native';

export type TextBaseRef = Text;

type TextBaseProps = TextProps & { children: React.ReactNode };

const TextBase = forwardRef<TextBaseRef, TextBaseProps>(({ children, ...props }, ref) => {

  return <Text {...props} allowFontScaling={false} ref={ref}>{children}</Text>;

});

export default TextBase;
