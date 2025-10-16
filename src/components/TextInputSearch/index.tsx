import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import { ISearchSVG } from '@/assets/svg';

import { styles } from './styles';

export type TTextInputSearchRef = { clear: Function, setValue: Function };

export const TextInputSearch = forwardRef<TTextInputSearchRef, TextInputProps>(({ ...props }, ref) => {

  const searchRef = useRef<string>('');

  const borderViewRef = useRef<View>(null);

  const textInputRef = useRef<TextInput>(null);

  const _onBlur = () => borderViewRef.current?.setNativeProps?.({ borderColor: '#F2F2F2' });

  const _onFocus = () => borderViewRef.current?.setNativeProps?.({ borderColor: '#000000' });

  const _onChangeText = (value: string) => searchRef.current = value;

  const _onPressSearch = () => {

  }

  const _onClear = () => {
    searchRef.current = '';
    textInputRef?.current?.clear?.();
  }

  const _onSetValue = (value: string) => {
    searchRef.current = value;
    textInputRef.current?.setNativeProps?.({ text: value });
  }

  useImperativeHandle(ref, () => ({ clear: _onClear, setValue: _onSetValue }));

  return (
    <View style={styles.container}>
      <View style={styles.borderView} pointerEvents='none' ref={borderViewRef} />

      <View style={styles.searchIcon}><ISearchSVG /></View>

      <TextInput
        style={styles.input}

        returnKeyType='search'
        cursorColor='#000000'
        selectionColor='#000000'
        placeholder={props?.placeholder}
        placeholderTextColor='#A3A3A3'

        onBlur={_onBlur}
        onFocus={_onFocus}
        onChangeText={_onChangeText}
        onSubmitEditing={_onPressSearch}

        ref={textInputRef}
      />
    </View>
  )

});
