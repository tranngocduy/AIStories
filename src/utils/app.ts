import { Platform } from 'react-native';

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

}
