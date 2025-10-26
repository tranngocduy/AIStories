import React from 'react';
import { Alert, View } from 'react-native';

import { ServiceAPI } from '@/apis';
import { useIStore } from '@/store';
import { userLogout } from '@/utils/app';
import { IArrowFullSVG, ILogoutSVG } from '@/assets/svg';
import { useAuthenticate } from '@/useHooks/useAuthenticate';

import { TextBase } from '@/components/TextBase';
import { ImageAvatar } from '@/components/ImageAvatar';
import { Authenticate } from '@/components/Authenticate';
import { TouchableView } from '@/components/TouchableView';

import { LoadingInstance, ToastInstance } from '@/instance';

import { styles } from './styles';

export const UserProfile: React.FC<{}> = () => {

  useAuthenticate();

  const userProfile = useIStore(state => state.userProfile);

  const _onUserLogout = async () => { userLogout(); ServiceAPI.logout(); }

  const _onPressLogout = () => Alert.alert('Đăng xuất', '\nBạn có muốn đăng xuất khỏi tài khoản', [{ text: 'Hủy', style: 'cancel', onPress: () => null }, { text: 'Đăng xuất', onPress: _onUserLogout }]);

  const _onPressDelete = () => Alert.alert('Xoá tài khoản', '\nBạn có muốn xoá tài khoản Chivi App.\nSau khi xoá tài khoản không thể khôi phục lai.', [{ text: 'Hủy', style: 'cancel', onPress: () => null }, { text: 'Xoá tài khoản', onPress: _onDelete }]);

  const _onDelete = async () => {
    LoadingInstance.show({});

    const result = await ServiceAPI.deleteUser();

    if (!result?.msgError) await userLogout();

    if (!result?.msgError) ToastInstance.show({ title: 'Xoá tài khoản thành công' });

    if (!!result?.msgError) ToastInstance.show({ title: result?.msgError });

    LoadingInstance.hide();
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleView}><TextBase style={styles.title}>Tài khoản</TextBase><TextBase style={styles.version}>Phiên bản: {process.env.$app.APP_VERSION.toFixed(1)}</TextBase></View>

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
