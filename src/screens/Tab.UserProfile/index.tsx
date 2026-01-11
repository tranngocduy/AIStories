import React from 'react';
import { View } from 'react-native';

import { useAuthenticate } from '@/useHooks/useAuthenticate';

const UserProfile: React.FC = () => {

  useAuthenticate();

  return (
    <View>

    </View>
  )

}

export default UserProfile;
