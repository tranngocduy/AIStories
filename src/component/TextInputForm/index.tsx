import React, { useState, useRef, useMemo } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import { IEyeOnSVG, IEyeOffSVG } from '@/assets/svg';

import TextMsgError from '@/component/TextMsgError';
import TouchableView from '@/component/TouchableView';
import InputBorder, { InputBorderRefs } from '@/component/InputBorder';

import styles from './styles';

type TextInputFormProps = { inputIcon?: React.JSX.Element, error?: string } & TextInputProps;

const TextInputForm: React.FC<TextInputFormProps> = ({ inputIcon, error, ...props }) => {

  const [isSecureTextEntry, setSecureTextEntry] = useState(!!props.secureTextEntry);

  const textInputRef = useRef<TextInput>(null);

  const inputBorderRefs = useRef<InputBorderRefs>(null);

  const _onSecure = () => setSecureTextEntry(!isSecureTextEntry);

  const _onBlur = () => inputBorderRefs.current?.onChangeStatus(false);

  const _onFocus = () => inputBorderRefs.current?.onChangeStatus(true);

  const _onPressInput = () => textInputRef.current?.focus?.();

  const _onChangeText = (value: string) => props?.onChangeText?.(value);

  const memoTextMsgError = useMemo(() => <TextMsgError error={error} />, [error]);

  const memoInputBorder = useMemo(() => <InputBorder isError={!!error} ref={inputBorderRefs} />, [error])

  return (
    <View>
      <TouchableView activeOpacity={1} style={styles.view} onPress={_onPressInput}>
        {memoInputBorder}

        {!!inputIcon && <View style={styles.inputIconView}>{inputIcon}</View>}

        <TextInput
          style={styles.input}

          cursorColor='#000000'
          selectionColor='#000000'
          selectionHandleColor='#000000'
          underlineColorAndroid='transparent'

          allowFontScaling={false}
          disableFullscreenUI={true}
          editable={props?.editable}
          maxLength={props?.maxLength}
          secureTextEntry={isSecureTextEntry}

          keyboardType={props?.keyboardType || 'default'}
          autoCapitalize={props?.autoCapitalize || 'none'}
          placeholderTextColor='#A3A3A3'
          placeholder={props?.placeholder}

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
