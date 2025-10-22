
import { ServiceAPI } from '@/apis';
import { useIStore } from '@/store';
import { setSecureInfo } from '@/database/secure';
import { TStoreUserProfile } from '@/store/types';

export const StoreUpdate = async (user: TStoreUserProfile) => {
  if (!!user?.access_token && !!user?.refresh_token) await setSecureInfo(user);

  const userInfo = await ServiceAPI.getUserInfo();

  if (!!userInfo?.msgError) return { errorMessage: userInfo.msgError };

  const profile = ((user || useIStore.getState().userProfile) || {});

  useIStore.getState().updateUserProfile({ ...profile, ...userInfo.data });

  return { data: true };
}
