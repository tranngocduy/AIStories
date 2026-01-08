import { createMMKV } from 'react-native-mmkv';

import { parseDataToObject } from '@/utils/format';

type StorageKey = 'DASHBOARD_STORIES' | 'STORE_CHAPTER_SETTINGS';

const storage = createMMKV();

export const getSchemaStorage = ({ key }: { key: StorageKey }) => parseDataToObject((storage.getString(key)));

export const setSchemaStorage = ({ key, data }: { key: StorageKey, data: any }) => storage.set(key, JSON.stringify(data));

export const clearAllSchemaStorage = () => storage.clearAll();
