import React from 'react';
import { Alert, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { ServiceAPI } from '@/apis';
import { useIStore } from '@/store';
import { userLogout } from '@/utils/app';
import { useAuthenticate } from '@/useHooks/useAuthenticate';
import { IUserAvatarSVG, IArrowFullSVG, ILockOpenSVG, ILogoutSVG } from '@/assets/svg';

import { TextBase } from '@/components/TextBase';
import { Authenticate } from '@/components/Authenticate';
import { TouchableView } from '@/components/TouchableView';

import { styles } from './styles';

export const UserProfile: React.FC<{}> = () => {

  useAuthenticate();

  const userProfile = useIStore(state => state.userProfile);

  const _onUserLogout = async () => { userLogout(); ServiceAPI.logout(); }

  const _onPressLogout = () => Alert.alert('Đăng xuất', '\nBạn có muốn đăng xuất khỏi tài khoản', [{ text: 'Hủy', style: 'cancel', onPress: () => null }, { text: 'Đăng xuất', onPress: _onUserLogout }]);

  const _onPressDelete = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.titleView}><TextBase style={styles.title}>Tài khoản</TextBase><TextBase style={styles.version}>Phiên bản: {process.env.$app.APP_VERSION.toFixed(1)}</TextBase></View>

      <Authenticate>
        <View style={styles.view}>

          <View style={styles.userView}>
            <View style={styles.avatarView}>
              <IUserAvatarSVG width={36} height={36} fill='#000000' />
              <LinearGradient style={styles.viewBG} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} colors={['rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 0.5)']} />
            </View>

            <View style={styles.userInfo}>
              <View style={styles.info}>
                <TextBase style={styles.username}>{userProfile?.username}</TextBase>
                <TouchableView onPress={_onPressDelete}><TextBase style={styles.account}>Xoá tài khoản</TextBase></TouchableView>
              </View>
              <TextBase style={styles.userId}>ID: {userProfile?.id}</TextBase>
            </View>
          </View>

          <View style={styles.detail}>
            <View>
              {/* <TouchableView style={styles.item} onPress={_onPressChangePassword}> // TODO
                <ILockOpenSVG fill='#000000' />
                <View style={styles.view}><TextBase style={styles.labelItem}>Đổi mật khẩu</TextBase></View>
                <View style={styles.icon}><IArrowFullSVG fill='#000000' /></View>
              </TouchableView>
              <View style={styles.separator} /> */}
            </View>

            <View>
              <TouchableView style={styles.item} onPress={_onPressLogout}>
                <ILogoutSVG />
                <View style={styles.view}><TextBase style={styles.labelLogout}>Đăng xuất</TextBase></View>
                <View style={styles.icon}><IArrowFullSVG fill='#000000' /></View>
              </TouchableView>
              <View style={styles.separator} />
            </View>
          </View>

        </View>
      </Authenticate>
    </View>
  )

}
