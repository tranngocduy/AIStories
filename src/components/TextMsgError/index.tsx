import React from 'react';
import { View, TextStyle } from 'react-native';

import { IErrorCircleSVG } from '@/assets/svg';

import { TextBase } from '@/components/TextBase';

import { styles } from './styles';

type TTextMsgError = { error?: string, errorTextStyle?: TextStyle }

const TextMsgError: React.FC<TTextMsgError> = ({ error, errorTextStyle }) => {

  const textStyle = [styles.text, errorTextStyle];

  if ((typeof (error) !== 'string' || !error)) return <View />;

  return <View style={styles.container}><View style={styles.view}><IErrorCircleSVG width={12} height={12} /><TextBase style={textStyle}>{error}</TextBase></View></View>;

}

export default TextMsgError;
