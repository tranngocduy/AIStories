import { create } from 'zustand';

import type { IStore, TStoreUserProfile, TStoreStory, TStoreGlobal } from './types';

const _shallowData = (oldData: any, newUpdate: any) => {
  const newData = { ...oldData, ...newUpdate };
  const shallowOldData = JSON.stringify(oldData);
  const shallowNewData = JSON.stringify(newData);

  if (shallowOldData !== shallowNewData) return newData;

  return oldData;
}

export const useIStore = create<IStore>((set) => ({
  userProfile: null,
  updateUserProfile: (data: TStoreUserProfile) => {
    set(state => ({ userProfile: _shallowData(state.userProfile, data) }))
  },

  storeStory: {},
  updateStoreStory: (data: TStoreStory) => {
    set(state => ({ storeStory: _shallowData(state.storeStory, data) }))
  },

  storeGlobal: {},
  updateStoreGlobal: (data: TStoreGlobal) => {
    set(state => ({ storeGlobal: _shallowData(state.storeGlobal, data) }))
  },

  clearStore: () => set(() => ({ userProfile: null, storeStory: null, storeGlobal: null }))
}));
