import React, { useState, useRef } from 'react';
import { View, ScrollView } from 'react-native';

import { ServiceAPI } from '@/apis';
import { logoIMG } from '@/assets/image';
import { checkRule } from '@/utils/rule';
import { IUserSVG, ILockSVG } from '@/assets/svg';
import { getDataMessageInValid } from '@/utils/service';
import { useStackNavigation } from '@/useHooks/useNavigation';

import { TextBase } from '@/components/TextBase';
import { ImageIcon } from '@/components/ImageIcon';
import { HeaderStack } from '@/components/HeaderStack';
import { TextInputForm } from '@/components/TextInputForm';
import { TouchableView } from '@/components/TouchableView';
import { ScrollAvoidingView } from '@/components/ScrollAvoidingView';
import { PrimaryButton, TPrimaryButtonRefs } from '@/components/PrimaryButton';

import { ToastInstance } from '@/instance';

import { styles } from './styles';

export const UserSignIn: React.FC<{}> = () => {
  const { navigate } = useStackNavigation();

  const [error, setError] = useState({ email: '', password: '' });

  const emailRef = useRef('');

  const passwordRef = useRef('');

  const buttonRef = useRef<TPrimaryButtonRefs>(null);

  const _onPressSignUp = () => navigate('UserSignUp');

  const _onChangeEmail = (value: string) => {
    emailRef.current = value;

    const isEmail = checkRule('email', emailRef.current);

    const msgError = { ...error };

    if (!emailRef.current || !!isEmail) msgError.email = '';

    if (!!emailRef.current && !isEmail) msgError.email = 'Địa chỉ email không hợp lệ';

    setError({ ...msgError });
  }

  const _onChangePassword = (value: string) => {
    passwordRef.current = value;

    const msgError = { ...error };

    if (!passwordRef.current || (passwordRef.current?.length >= 8)) msgError.password = '';

    if (!!passwordRef.current && (passwordRef.current?.length < 8)) msgError.password = 'Mật khẩu quá ngắn (cần ít nhất 8 ký tự)';

    setError({ ...msgError });
  }

  const _onPressSignIn = async () => {
    const msgError = { ...error };

    if (!emailRef.current) msgError.email = 'Thông tin này là bắt buộc';

    if (!passwordRef.current) msgError.password = 'Thông tin này là bắt buộc';

    const isInValid = getDataMessageInValid(msgError);

    if (!!isInValid) setError({ ...msgError });

    if (!isInValid) {
      buttonRef.current?.startLoad?.();

      const result = await ServiceAPI.login({ email: emailRef.current, password: passwordRef.current });

      if (!!result?.msgError) ToastInstance.show({ message: result?.msgError, type: 'error' });

      if (!!result?.data?.access_token) {
        
      }

      buttonRef.current?.stopLoad?.();
    }
  }

  return (
    <View style={styles.container}>
      <HeaderStack />

      <ScrollAvoidingView>
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps='handled'>

          <View style={styles.logoView}>
            <ImageIcon source={logoIMG} style={styles.logoIcon} />
            <TextBase style={styles.logoTitle}>Truyện AI</TextBase>
          </View>

          <View style={styles.form}>
            <TextInputForm keyboardType='email-address' placeholder='Nhập email' inputIcon={<IUserSVG />} error={error.email} onChangeText={_onChangeEmail} />
            <TextInputForm placeholder='Nhập mật khẩu' secureTextEntry={true} inputIcon={<ILockSVG />} error={error.password} onChangeText={_onChangePassword} />
          </View>

          <PrimaryButton label='Đăng nhập' onPress={_onPressSignIn} ref={buttonRef} />


          <View style={styles.bottomView}><TouchableView hitSlop={16} onPress={_onPressSignUp}><TextBase style={styles.bottomText}>Đăng ký</TextBase></TouchableView></View>
        </ScrollView>
      </ScrollAvoidingView>
    </View>
  )

}
