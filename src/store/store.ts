import { create } from 'zustand';
import { IStore, TStoreUserProfile } from './types';

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

  clearStore: () => set(() => ({ userProfile: null }))
}));
