import React, { forwardRef } from 'react';
import { Text, TextProps } from 'react-native';

export type TextBaseRefs = Text;

type TextBaseProps = TextProps & { children: React.ReactNode };

const TextBase = forwardRef<TextBaseRefs, TextBaseProps>(({ children, ...props }, ref) => {

  return <Text {...props} allowFontScaling={false} ref={ref}>{children}</Text>;

});

export default TextBase;
