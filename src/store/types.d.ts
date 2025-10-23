import { TUserProfile } from '@/models/types';

export type TChapSettings = { fontSize?: number, lineHeight?: number, mapColors?: { text?: string, background?: string } };

export type TStoreGlobal = { chapterSettings?: TChapSettings } | null;

export type TStoreUserProfile = { is_signed?: boolean } & TUserProfile | null;

interface _IStore { clearStore: () => void }

interface _IUserProfile { userProfile: TStoreUserProfile, updateUserProfile: (data: TStoreUserProfile) => void }

interface _IStoreGlobal { storeGlobal: TStoreGlobal, updateStoreGlobal: (data: TStoreGlobal) => void }

export interface IStore extends _IStore, _IUserProfile, _IStoreGlobal { }
