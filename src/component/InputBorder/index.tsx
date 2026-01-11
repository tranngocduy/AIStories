import React, { useState, memo, forwardRef, useImperativeHandle } from 'react';
import { View } from 'react-native';

import styles from './styles';

type InputBorderProps = { isError?: boolean; }

export type InputBorderRefs = { onChangeStatus: (isFocus: boolean) => void; }

const InputBorder = forwardRef<InputBorderRefs, InputBorderProps>(({ isError }, ref) => {

  const border = { focus: '#000000', blur: '#F2F2F2', error: '#FF0000' };

  const [isFocus, setFocus] = useState(false);

  const _onChangeStatus = (isFocus: boolean) => setFocus(isFocus);

  useImperativeHandle(ref, () => ({ onChangeStatus: _onChangeStatus }));

  const borderColor = isError ? border.error : isFocus ? border.focus : border.blur;

  return <View style={[styles.container, { borderColor }]} pointerEvents='none' />;

});

export default memo(InputBorder);
