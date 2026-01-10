import type { TUserProfile } from '@/models/types';

export type TChapSettings = { fontSize?: number, lineHeight?: number, mapColors?: { text?: string, background?: string } };

export type TStoreUserProfile = { is_signed?: boolean } & TUserProfile | null;

export type TStoreStory = { totalChapters?: number, translateVersionId?: number } | null;

export type TStoreGlobal = { chapterSettings?: TChapSettings } | null;

interface _IStore { clearStore: () => void }

interface _IUserProfile { userProfile: TStoreUserProfile, updateUserProfile: (data: TStoreUserProfile) => void }

interface _IStoreStory { storeStory: TStoreStory, updateStoreStory: (data: TStoreStory) => void }

interface _IStoreGlobal { storeGlobal: TStoreGlobal, updateStoreGlobal: (data: TStoreGlobal) => void }

export interface IStore extends _IStore, _IUserProfile, _IStoreStory, _IStoreGlobal { }
