import { createRef } from 'react';

import { Platform, InteractionManager } from 'react-native';

export const isIOS = !!(Platform.OS === 'ios');

export const Authorization = createRef<{ id: number, exp: number, access_token: string, refresh_token: string } | null>();

export const timeoutSleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const runAfterInteractions = (fn: Function, time = 0) => {
  let timer: NodeJS.Timeout;

  InteractionManager.runAfterInteractions(() => {
    timer = setTimeout(() => {
      if (!!fn && (typeof (fn) === 'function')) fn();
      clearTimeout(timer);
    }, time);
  });
}
