import React, { useState, useRef } from 'react';
import { View, ScrollView } from 'react-native';

import { logoIMG } from '@/assets/image';
import { IUserSVG, ILockSVG } from '@/assets/svg';

import TextBase from '@/component/TextBase';
import ImageIcon from '@/component/ImageIcon';
import HeaderStack from '@/component/HeaderStack';
import TextInputForm from '@/component/TextInputForm';
import Button, { ButtonRefs } from '@/component/Button';
import ScrollAvoidingView from '@/component/ScrollAvoidingView';

import styles from './styles';

const UserSignIn: React.FC = () => {

  const [error, setError] = useState({ email: '', password: '' });

  const emailRef = useRef('');

  const passwordRef = useRef('');

  const buttonRef = useRef<ButtonRefs>(null);

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

        </ScrollView>
      </ScrollAvoidingView>
    </View>
  )

}

export default UserSignIn;
