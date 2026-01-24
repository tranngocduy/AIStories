import React, { useMemo } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useIStore } from '@/store';
import { useStackNavigation } from '@/useHooks/useNavigation';

import Button from '@/component/Button';
import TextBase from '@/component/TextBase';

import styles from './styles';

type AuthenticateProps = { children: React.JSX.Element }

const Authenticate: React.FC<AuthenticateProps> = ({ children }) => {

  const navigation = useStackNavigation();

  const isSigned = useIStore(state => state.userProfile?.is_signed);

  const accessToken = useIStore(state => state.userProfile?.access_token);

  const _onPressSign = () => navigation.navigate('UserSignIn');

  const memoAuth = useMemo(() => (
    <View style={styles.authView}>
      <TextBase style={styles.authText}>Đăng nhập để truy cập toàn bộ dịch vụ và{'\n'}quản lý thông tin dễ dàng hơn.</TextBase>
      <Button style={styles.authButton} label='Đăng nhập' onPress={_onPressSign} />
    </View>
  ), []);

  const memoLoading = useMemo(() => (
    <View style={styles.loadingView}>
      <ActivityIndicator size='small' />
      <TextBase style={styles.loadingText}>Đang đăng nhập ...</TextBase>
    </View>
  ), []);

  if (!!isSigned && !!accessToken) return <View style={styles.view}>{children}</View>;

  return <View style={styles.container}>{!accessToken && memoAuth}{!!accessToken && memoLoading}</View>;

}

export default Authenticate;
