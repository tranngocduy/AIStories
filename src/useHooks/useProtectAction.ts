import { useIStore } from '@/store';

import { useStackNavigation } from '@/useHooks/useNavigation';

export const useProtectAction = () => {
  const { navigate } = useStackNavigation();

  const userId = useIStore(state => state.userProfile?.id);

  const isSigned = useIStore(state => state.userProfile?.is_signed);

  const accessToken = useIStore(state => state.userProfile?.access_token);

  const _onProtectAction = () => {
    if (!isSigned) navigate('UserSignIn');

    if (!isSigned) return { isProtected: false };

    return { isProtected: true };
  }

  return { userId, isSigning: (!isSigned && !!accessToken), onProtectAction: _onProtectAction };
}
