import React from 'react';
import { View } from 'react-native';

import { ServiceAPI } from '@/apis';
import { useIStore } from '@/store';
import { userLogout } from '@/utils/app';
import { useAuthenticate } from '@/useHooks/useAuthenticate';
import { IArrowFullSVG, ILogoutSVG, ILockOpenSVG } from '@/assets/svg';

import TextBase from '@/component/TextBase';
import ImageAvatar from '@/component/ImageAvatar';
import Authenticate from '@/component/Authenticate';
import TouchableView from '@/component/TouchableView';

import styles from './styles';

const UserProfile: React.FC = () => {

  useAuthenticate();

  const userProfile = useIStore(state => state.userProfile);

  const _onUserLogout = async () => {
    await ServiceAPI.logout();
    userLogout();
  }

  const _onPressChangePassword = () => {

  }

  const _onPressLogout = () => {

  }

  const _onPressDelete = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <TextBase style={styles.title}>Tài khoản</TextBase>
        <TextBase style={styles.version}>Phiên bản: {process.env.$app.APP_VERSION.toFixed(1)}</TextBase>
      </View>

      <Authenticate>
        <View style={styles.view}>

          <View style={styles.userView}>
            <ImageAvatar />

            <View style={styles.userInfo}>
              <View style={styles.info}>
                <TextBase style={styles.username}>{userProfile?.username}</TextBase>
                <TouchableView onPress={_onPressDelete}><TextBase style={styles.account}>Xoá tài khoản</TextBase></TouchableView>
              </View>
              <TextBase style={styles.userId}>ID: {userProfile?.id}</TextBase>
            </View>
          </View>

          <View style={styles.detail}>
            <View style={{ opacity: 0, display: 'none', pointerEvents: 'none' }}> {/* TODO */}
              <TouchableView style={styles.item} onPress={_onPressChangePassword}>
                <ILockOpenSVG fill='#000000' />
                <View style={styles.view}><TextBase style={styles.labelItem}>Đổi mật khẩu</TextBase></View>
                <View style={styles.icon}><IArrowFullSVG fill='#000000' /></View>
              </TouchableView>
              <View style={styles.separator} />
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

export default UserProfile;
