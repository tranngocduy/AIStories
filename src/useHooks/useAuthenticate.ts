import { useEffect } from 'react';

import { useIStore, StoreUpdate } from '@/store';
import { getSecureInfo } from '@/database/secure';
import { loadChapterSettings } from '@/utils/service';
import { runAfterInteractions, userLogout } from '@/utils/app';
import { useEffectAfterMount } from '@/useHooks/useEffectAfterMount';

import { ToastInstance } from '@/instance';

export const useAuthenticate = () => {

  const access_token = useIStore(state => state.userProfile?.access_token);

  const refresh_token = useIStore(state => state.userProfile?.refresh_token);

  const _loadSecure = async () => {
    loadChapterSettings();

    const secureInfo = await getSecureInfo();

    const access_token = secureInfo?.access_token;

    const refresh_token = secureInfo?.refresh_token;

    useIStore.getState().updateUserProfile({ access_token, refresh_token });
  }

  const _loadData = async () => {
    if (!access_token || !refresh_token) return null;

    const storeResult = await StoreUpdate({ access_token, refresh_token });

    if (!storeResult || !!storeResult.msgError) await userLogout();

    if (!!storeResult?.msgError) ToastInstance.show({ message: storeResult?.msgError, type: 'error' });
  }

  useEffect(() => runAfterInteractions(_loadSecure, 500), []);

  useEffectAfterMount(() => { runAfterInteractions(_loadData, 500); }, [access_token, refresh_token]);

  return null;

}
