import React from 'react';
import { View } from 'react-native';

import { ServiceAPI } from '@/apis';
import { useIStore } from '@/store';
import { userLogout, timeoutSleep } from '@/utils/app';
import { useAuthenticate } from '@/useHooks/useAuthenticate';
import { IArrowFullSVG, ILogoutSVG, ILockOpenSVG } from '@/assets/svg';

import TextBase from '@/component/TextBase';
import ImageAvatar from '@/component/ImageAvatar';
import Authenticate from '@/component/Authenticate';
import TouchableView from '@/component/TouchableView';
import { LoadingInstance, ToastInstance, ToastConfirmInstance } from '@/instance';

import styles from './styles';

const UserProfile: React.FC = () => {

  useAuthenticate();

  const userProfile = useIStore(state => state.userProfile);

  const _onPressChangePassword = () => { }

  const _onPressLogout = async () => {
    const isConfirmed = await new Promise(resolve => ToastConfirmInstance.show({ title: 'Đăng xuất', message: 'Bạn có chắc chắn muốn đăng xuất khỏi tài khoản này không?', resolve }));

    if (!isConfirmed) return null;

    await userLogout();

    ServiceAPI.logout();
  }

  const _onPressDelete = async () => {
    const title = <TextBase style={styles.titleDelete}>Xoá tài khoản</TextBase>;

    const message = 'Bạn có muốn xoá tài khoản ứng dụng. Sau khi xoá tài khoản không thể khôi phục lai.'

    const isConfirmed = await new Promise(resolve => ToastConfirmInstance.show({ title, message, resolve }));

    if (!isConfirmed) return null;

    LoadingInstance.show();

    await timeoutSleep(1000);

    const result = await ServiceAPI.deleteUser();

    if (!result?.errorMessage) await userLogout();

    if (!result?.errorMessage) ToastInstance.show({ title: 'Xoá tài khoản thành công' });

    if (!!result?.errorMessage) ToastInstance.show({ title: result?.errorMessage });

    LoadingInstance.hide();
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
            <View style={{ opacity: 0, display: 'none', pointerEvents: 'none' }}>{/* TODO */}
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
