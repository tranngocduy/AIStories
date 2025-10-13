import { MMKV } from 'react-native-mmkv';

import { parseDataToObject } from '@/utils/format';

export const storage = new MMKV();

export const getDataStorage = ({ key }: { key: string }) => parseDataToObject((storage.getString(key)));

export const setDataStorage = ({ key, data }: { key: string, data: any }) => storage.set(key, JSON.stringify(data));
