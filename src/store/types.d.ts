import { TUserProfile } from '@/models/types';

export type TStoreUserProfile = { is_signed?: boolean } & TUserProfile | null;

export type TStoreGlobal = { chapterSetting?: { fontSize?: number, lineHeight?: number, mapColors?: { text?: string, background?: string } } } | null;

interface _IStore { clearStore: () => void }

interface _IUserProfile { userProfile: TStoreUserProfile, updateUserProfile: (data: TStoreUserProfile) => void }

interface _IStoreGlobal { storeGlobal: TStoreGlobal, updateStoreGlobal: (data: TStoreGlobal) => void }

export interface IStore extends _IStore, _IUserProfile, _IStoreGlobal { }
