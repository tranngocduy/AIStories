import React, { useState, useRef } from 'react';
import { View, ScrollView } from 'react-native';

import { ServiceAPI } from '@/apis';
import { logoIMG } from '@/assets/image';
import { IUserSVG, ILockSVG } from '@/assets/svg';
import { getDataMessageInValid } from '@/utils/service';
import { useStackNavigation } from '@/useHooks/useNavigation';

import TextBase from '@/component/TextBase';
import ImageIcon from '@/component/ImageIcon';
import HeaderStack from '@/component/HeaderStack';
import TextInputForm from '@/component/TextInputForm';
import TouchableView from '@/component/TouchableView';
import Button, { ButtonRefs } from '@/component/Button';
import ScrollAvoidingView from '@/component/ScrollAvoidingView';
import { ToastInstance } from '@/instance';

import styles from './styles';

const UserSignIn: React.FC = () => {
  const navigation = useStackNavigation();

  const [error, setError] = useState({ email: '', password: '' });

  const emailRef = useRef('');

  const passwordRef = useRef('');

  const buttonRef = useRef<ButtonRefs>(null);

  const _onPressSignUp = () => navigation?.navigate?.('UserSignUp');

  const _onChangeEmail = (value: string) => {
    emailRef.current = value;

    const regex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

    const isEmail = !!regex.test(emailRef.current);

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

      if (!!result?.errorMessage) {
        if ((result?.errorMessage === 'Inactive user')) ToastInstance.show({ message: 'Tài khoản không tồn tại.', type: 'error' });

        else if ((result?.errorMessage === 'Incorrect email or password')) ToastInstance.show({ message: 'Tài khoản hoặc mật khẩu không đúng.', type: 'error' });

        else ToastInstance.show({ message: result?.errorMessage, type: 'error' });
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

          <Button label='Đăng nhập' onPress={_onPressSignIn} ref={buttonRef} />

          <View style={styles.bottomView}><TouchableView hitSlop={16} onPress={_onPressSignUp}><TextBase style={styles.bottomText}>Đăng ký</TextBase></TouchableView></View>
        </ScrollView>
      </ScrollAvoidingView>
    </View>
  )

}

export default UserSignIn;
