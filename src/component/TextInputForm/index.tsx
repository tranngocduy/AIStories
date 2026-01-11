import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import { IEyeOnSVG, IEyeOffSVG } from '@/assets/svg';

import TextMsgError from '@/component/TextMsgError';
import TouchableView from '@/component/TouchableView';

import styles from './styles';

type TextInputFormProps = { inputIcon?: React.JSX.Element, error?: string } & TextInputProps;

const TextInputForm: React.FC<TextInputFormProps> = ({ inputIcon, error, ...props }) => {

  const border = { focus: '#000000', blur: '#F2F2F2', error: '#FF0000' };

  const [isSecureTextEntry, setSecureTextEntry] = useState(!!props.secureTextEntry);

  const borderRef = useRef<View>(null);

  const isFocusRef = useRef<boolean>(false);

  const textInputRef = useRef<TextInput>(null);

  const _onSecure = () => setSecureTextEntry(!isSecureTextEntry);

  const _onBlur = () => {
    isFocusRef.current = false;
    borderRef.current?.setNativeProps?.({ borderColor: !!error ? border.error : border.blur });
  }

  const _onFocus = () => {
    isFocusRef.current = true;
    borderRef.current?.setNativeProps?.({ borderColor: !!error ? border.error : !!isFocusRef.current ? border.focus : border.blur });
  }

  const _onPressInput = () => textInputRef.current?.focus?.();

  const _onChangeText = (value: string) => props?.onChangeText?.(value);

  useEffect(() => { borderRef.current?.setNativeProps?.({ borderColor: !!error ? border.error : !!isFocusRef.current ? border.focus : border.blur }); }, [error]);

  const memoTextMsgError = useMemo(() => <TextMsgError error={error} />, [error]);

  return (
    <View>
      <TouchableView activeOpacity={1} style={styles.view} onPress={_onPressInput}>
        <View style={styles.border} pointerEvents='none' ref={borderRef} />

        {!!inputIcon && <View style={styles.inputIconView}>{inputIcon}</View>}

        <TextInput
          style={styles.input}

          cursorColor={'#000000'}
          allowFontScaling={false}
          disableFullscreenUI={true}

          editable={props?.editable}
          maxLength={props?.maxLength}
          keyboardType={props?.keyboardType || 'default'}
          autoCapitalize={props?.autoCapitalize || 'none'}

          placeholderTextColor='#A3A3A3'
          placeholder={props?.placeholder}
          secureTextEntry={isSecureTextEntry}

          onBlur={_onBlur}
          onFocus={_onFocus}
          onChangeText={_onChangeText}

          ref={textInputRef}
        />

        {!!props?.secureTextEntry && <TouchableView style={styles.secureIcon} hitSlop={16} onPress={_onSecure}>{!!isSecureTextEntry ? <IEyeOffSVG /> : <IEyeOnSVG />}</TouchableView>}
      </TouchableView>

      {memoTextMsgError}
    </View>
  )

}

export default TextInputForm;
