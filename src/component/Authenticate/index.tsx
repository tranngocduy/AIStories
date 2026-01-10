import React from 'react';
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

  if (!!isSigned && !!accessToken) return <View style={styles.view}>{children}</View>;

  return (
    <View style={styles.container}>
      {!accessToken && <View style={styles.button}><Button label='Đăng nhập' onPress={_onPressSign} /></View>}
      {!!accessToken && <View style={styles.loading}><ActivityIndicator size='small' /><TextBase style={styles.text}>Đang đăng nhập ...</TextBase></View>}
    </View>
  )

}

export default Authenticate;
