import React, { useState, useRef } from 'react';
import { View, ScrollView } from 'react-native';

import { ServiceAPI } from '@/apis';
import { checkRule } from '@/utils/rule';
import { getDataMessageInValid } from '@/utils/service';
import { useStackNavigation } from '@/useHooks/useNavigation';

import { TextBase } from '@/components/TextBase';
import { HeaderStack } from '@/components/HeaderStack';
import { TextInputForm } from '@/components/TextInputForm';
import { ScrollAvoidingView } from '@/components/ScrollAvoidingView';
import { PrimaryButton, TPrimaryButtonRefs } from '@/components/PrimaryButton';

import { ToastInstance } from '@/instance';

import { styles } from './styles';

export const UserSignUp: React.FC<{}> = () => {
  const navigation = useStackNavigation();

  const [error, setError] = useState({ email: '', username: '', password: '', confirmPassword: '' });

  const emailRef = useRef('');

  const usernameRef = useRef('');

  const passwordRef = useRef('');

  const confirmPasswordRef = useRef('');

  const buttonRef = useRef<TPrimaryButtonRefs>(null);

  const _onChangeEmail = (value: string) => {
    emailRef.current = value;

    const isEmail = checkRule('email', emailRef.current);

    const msgError = { ...error };

    if (!emailRef.current || !!isEmail) msgError.email = '';

    if (!!emailRef.current && !isEmail) msgError.email = 'Địa chỉ email không hợp lệ';

    setError({ ...msgError });
  }

  const _onChangeUsername = (value: string) => {
    usernameRef.current = value;

    const msgError = { ...error };

    if (!usernameRef.current || (usernameRef.current?.length >= 3)) msgError.username = '';

    if (!!usernameRef.current && (usernameRef.current?.length < 3)) msgError.username = 'Tên người dùng quá ngắn (cần ít nhất 3 ký tự)';

    setError({ ...msgError });
  }

  const _onChangePassword = (value: string) => {
    passwordRef.current = value;

    const msgError = { ...error };

    if (!passwordRef.current || (passwordRef.current?.length >= 8)) msgError.password = '';

    else if (!!passwordRef.current && (passwordRef.current?.length < 8)) msgError.password = 'Mật khẩu quá ngắn (cần ít nhất 8 ký tự)';

    if (!!confirmPasswordRef.current && (confirmPasswordRef.current === passwordRef.current)) msgError.confirmPassword = '';

    else if (!!confirmPasswordRef.current && (confirmPasswordRef.current !== passwordRef.current)) msgError.confirmPassword = 'Xác nhận mật khẩu không trủng khớp';

    setError({ ...msgError });
  }

  const _onChangeConfirmPassword = (value: string) => {
    confirmPasswordRef.current = value;

    const msgError = { ...error };

    if (!confirmPasswordRef.current || (confirmPasswordRef.current === passwordRef.current)) msgError.confirmPassword = '';

    else if ((confirmPasswordRef.current !== passwordRef.current)) msgError.confirmPassword = 'Xác nhận mật khẩu không trủng khớp';

    setError({ ...msgError });
  }

  const _onPressSubmit = async () => {
    const msgError = { ...error };

    if (!emailRef.current) msgError.email = 'Thông tin này là bắt buộc';

    if (!usernameRef.current) msgError.username = 'Thông tin này là bắt buộc';

    if (!passwordRef.current) msgError.password = 'Thông tin này là bắt buộc';

    if (!confirmPasswordRef.current) msgError.confirmPassword = 'Thông tin này là bắt buộc';

    const isInValid = getDataMessageInValid(msgError);

    if (!!isInValid) setError({ ...msgError });

    if (!isInValid) {
      buttonRef.current?.startLoad?.();

      const result = await ServiceAPI.register({ email: emailRef.current, username: usernameRef.current, password: passwordRef.current });

      if (!!result?.data?.email) navigation?.goBack?.();

      if (!!result?.data?.email) ToastInstance.show({ message: 'Đăng ký thành công', type: 'success' });

      if (!!result?.msgError) ToastInstance.show({ message: result?.msgError, type: 'error' });

      buttonRef.current?.stopLoad?.();
    }
  }

  return (
    <View style={styles.container}>
      <HeaderStack />

      <ScrollAvoidingView>
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps='handled'>

          <View>
            <TextBase style={styles.label}>Email</TextBase>
            <TextInputForm keyboardType='email-address' placeholder='Nhập Email' error={error.email} onChangeText={_onChangeEmail} />
          </View>

          <View>
            <TextBase style={styles.label}>Tên đăng nhập</TextBase>
            <TextInputForm placeholder='Nhập tên đăng nhập' error={error.username} onChangeText={_onChangeUsername} />
          </View>

          <View>
            <TextBase style={styles.label}>Mật khẩu</TextBase>
            <TextInputForm secureTextEntry={true} placeholder='Nhập mật khẩu' error={error.password} onChangeText={_onChangePassword} />
          </View>

          <View>
            <TextBase style={styles.label}>Xác nhận mật khẩu</TextBase>
            <TextInputForm secureTextEntry={true} placeholder='Nhập lại mật khẩu' error={error.confirmPassword} onChangeText={_onChangeConfirmPassword} />
          </View>

          <PrimaryButton label='Đăng ký' onPress={_onPressSubmit} ref={buttonRef} />

        </ScrollView>
      </ScrollAvoidingView>
    </View>
  )

}
