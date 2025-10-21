import React from 'react';
import { ImageBackground, ImageBackgroundProps } from 'react-native';

export const ImageIcon: React.FC<ImageBackgroundProps> = ({ source, style, ...props }) => {

  return <ImageBackground source={source} style={style} resizeMode={props?.resizeMode || 'stretch'} />

}
