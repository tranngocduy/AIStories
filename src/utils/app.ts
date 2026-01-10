import { createRef } from 'react';
import { Platform } from 'react-native';

import { useIStore } from '@/store';
import { removeSecureInfo } from '@/database/secure';
import { clearAllSchemaStorage } from '@/database/storage';

export const Authorization = createRef<{ id: number; exp: number; access_token?: string; refresh_token?: string; } | null>();

export const isIOS = !!(Platform.OS === 'ios');

export const timeoutSleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const runAfterInteractions = (fn: () => void, time?: number) => {
  let timer: NodeJS.Timeout;

  const idleHandle = requestIdleCallback(() => {
    cancelIdleCallback(idleHandle);

    timer = setTimeout(() => {
      clearTimeout(timer);
      if (!!fn && (typeof (fn) === 'function')) fn();
    }, time);
  }, { timeout: 350 });
};

export const userLogout = async () => {
  clearAllSchemaStorage();
  await removeSecureInfo();
  useIStore.getState().clearStore();
}
