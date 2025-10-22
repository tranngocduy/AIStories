import { useEffect } from 'react';

import { useIStore, StoreUpdate } from '@/store';
import { getSecureInfo } from '@/database/secure';
import { runAfterInteractions, userLogout } from '@/utils/app';
import { useEffectAfterMount } from '@/useHooks/useEffectAfterMount';

export const useAuthenticate = () => {

  const access_token = useIStore(state => state.userProfile?.access_token);

  const refresh_token = useIStore(state => state.userProfile?.refresh_token);

  const _loadSecure = async () => {
    const secureInfo = await getSecureInfo();

    const access_token = secureInfo.access_token;

    const refresh_token = secureInfo.refresh_token;

    useIStore.getState().updateUserProfile({ access_token, refresh_token });
  }

  const _loadData = async () => {
    if (!access_token || !refresh_token) return null;

    const result = await StoreUpdate({ access_token, refresh_token });

    if (!result || !!result.msgError) await userLogout();
  }

  useEffect(() => runAfterInteractions(_loadSecure, 500), []);

  useEffectAfterMount(() => { runAfterInteractions(_loadData, 500); }, [access_token, refresh_token])

  return null;

}
