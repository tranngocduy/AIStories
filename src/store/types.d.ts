import { TUserProfile } from '@/models/types';

export type TStoreUserProfile = { is_signed?: boolean } & TUserProfile | null;

interface _IStore { clearStore: () => void }

interface _IUserProfile { userProfile: TStoreUserProfile, updateUserProfile: (data: TStoreUserProfile) => void }

export interface IStore extends _IStore, _IUserProfile { }
