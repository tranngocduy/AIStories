import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import { ISearchSVG, ICloseModalSVG } from '@/assets/svg';

import ProgressIcon from '@/component/ProgressIcon';
import TouchableView from '@/component/TouchableView';

import styles from './styles';

export type TextInputSearchRefs = { clear: Function, setValue: Function, setLoading: Function };

const TextInputSearch = forwardRef<TextInputSearchRefs, TextInputProps>(({ ...props }, ref) => {

  const searchRef = useRef<string>('');

  const borderViewRef = useRef<View>(null);

  const textInputRef = useRef<TextInput>(null);

  const viewInputClearRef = useRef<View>(null);

  const viewInputLoadingRef = useRef<View>(null);

  const _onBlur = () => borderViewRef.current?.setNativeProps?.({ borderColor: '#F2F2F2' });

  const _onFocus = () => borderViewRef.current?.setNativeProps?.({ borderColor: '#000000' });

  const _onChangeText = (value: string) => {
    searchRef.current = value;
    props?.onChangeText?.(searchRef.current);

    if (!value) viewInputClearRef.current?.setNativeProps?.({ style: { display: 'none' } });
    if (!!value) viewInputClearRef.current?.setNativeProps?.({ style: { display: 'flex' } });
  }

  const _onClean = () => {
    _onChangeText('');
    textInputRef?.current?.clear?.();
  }

  const _onClear = () => {
    searchRef.current = '';
    textInputRef?.current?.clear?.();
    viewInputClearRef.current?.setNativeProps?.({ style: { display: 'none' } });
  }

  const _onSetValue = (value: string) => {
    searchRef.current = value;
    textInputRef.current?.setNativeProps?.({ text: value });
    viewInputClearRef.current?.setNativeProps?.({ style: { display: 'flex' } });
  }

  const _onLoading = (isLoading: boolean) => {
    if (!isLoading) viewInputLoadingRef.current?.setNativeProps?.({ style: { display: 'none' } });
    if (!!isLoading) viewInputLoadingRef.current?.setNativeProps?.({ style: { display: 'flex' } });
  }

  useImperativeHandle(ref, () => ({ clear: _onClear, setValue: _onSetValue, setLoading: _onLoading }));

  return (
    <View style={styles.container}>
      <View style={styles.borderView} pointerEvents='none' ref={borderViewRef} />

      <View style={styles.searchIcon}><ISearchSVG /></View>

      <TextInput
        style={styles.input}

        autoCapitalize='none'
        cursorColor='#000000'
        selectionColor='#000000'
        placeholder={props?.placeholder}
        placeholderTextColor='#A3A3A3'

        onBlur={_onBlur}
        onFocus={_onFocus}
        onChangeText={_onChangeText}

        ref={textInputRef}
      />

      <View style={styles.statusView}>
        <View style={styles.status} ref={viewInputLoadingRef}><ProgressIcon size='small' /></View>
        <View style={styles.status} ref={viewInputClearRef}><TouchableView hitSlop={12} onPress={_onClean}><ICloseModalSVG /></TouchableView></View>
      </View>
    </View>
  )

});

export default TextInputSearch;
