import React, { useEffect, useRef, useMemo, forwardRef, useImperativeHandle } from 'react';
import { ActivityIndicator, View, Keyboard, ViewStyle, TextStyle } from 'react-native';

import TextBase from '@/component/TextBase';
import TouchableView from '@/component/TouchableView';

import styles from './styles';

export type PrimaryButtonRefs = { startLoad: () => void, stopLoad: () => void, enabled: (status: boolean) => void };

type PrimaryButtonProps = { label?: string, style?: ViewStyle, labelStyle?: TextStyle, color?: string, disabled?: boolean, onPress: Function };

const PrimaryButton = forwardRef<PrimaryButtonRefs, PrimaryButtonProps>(({ label, style, labelStyle, color, onPress, ...props }, ref) => {

  const viewRef = useRef<View>(null);

  const loadRef = useRef<View>(null);

  const _onPress = () => {
    Keyboard?.dismiss?.();
    if ((typeof (onPress) === 'function')) onPress?.();
  }

  const _startLoad = () => {
    loadRef.current?.setNativeProps?.({ display: 'flex' });
    viewRef.current?.setNativeProps?.({ pointerEvents: 'none' });
  }

  const _stopLoad = () => {
    loadRef.current?.setNativeProps?.({ display: 'none' });
    viewRef.current?.setNativeProps?.({ pointerEvents: 'auto' });
  }

  const _enabled = (status: boolean) => {
    const opacity = !status ? 0.5 : 1;
    const pointerEvents = !status ? 'none' : 'auto';

    viewRef.current?.setNativeProps?.({ opacity });
    viewRef.current?.setNativeProps({ pointerEvents });
  }

  useImperativeHandle(ref, () => ({ startLoad: _startLoad, stopLoad: _stopLoad, enabled: _enabled }));

  useEffect(() => { _enabled(!props.disabled); }, [])

  const memoIndicator = useMemo(() => <View style={styles.loadIcon} ref={loadRef}><ActivityIndicator size='small' color='#FFFFFF' /></View>, []);

  return (
    <View style={[styles.container, style]} pointerEvents='auto' ref={viewRef}>
      <View style={[styles.viewBG, { backgroundColor: (color || '#000000') }]} pointerEvents='none' />

      <TouchableView style={styles.view} onPress={_onPress}>
        <View style={styles.loadView} pointerEvents='none'>{memoIndicator}</View>

        <TextBase style={[styles.label, labelStyle]}>{label}</TextBase>

        <View style={styles.loadView} pointerEvents='none' />
      </TouchableView>
    </View>
  )

});

export default PrimaryButton;
