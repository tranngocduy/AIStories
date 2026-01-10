import { ServiceAPI } from '@/apis';
import { useIStore } from '@/store';
import { setSecureInfo } from '@/database/secure';
import type { TStoreUserProfile } from '@/store/types';

export const StoreUpdate = async (user: TStoreUserProfile) => {
  if (!!user?.access_token && !!user?.refresh_token) await setSecureInfo(user);

  const userInfo = await ServiceAPI.getUserInfo();

  if (!!userInfo?.errorMessage) return { msgError: userInfo.errorMessage };

  const profile = ((user || useIStore.getState().userProfile) || {}) as TStoreUserProfile;

  useIStore.getState().updateUserProfile({ ...profile, ...userInfo.data, is_signed: true } as TStoreUserProfile);

  return { data: true };
}
