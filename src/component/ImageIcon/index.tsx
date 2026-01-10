import React from 'react';
import { ImageBackground, ImageBackgroundProps } from 'react-native';

const ImageIcon: React.FC<ImageBackgroundProps> = ({ source, style, ...props }) => {

  return <ImageBackground source={source} style={style} resizeMode={props?.resizeMode || 'stretch'} />

}

export default ImageIcon;
