import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useIsFocused, useRoute, RouteProp } from '@react-navigation/native';

import type { TStory, TChapter, TOptionFilterState } from '@/models/types';

type RootStackParamList = {
  UserSignIn: undefined,
  UserSignUp: undefined,
  PageSetting: undefined,
  PageChapter: { story: TStory, chapter: TChapter },

  StoryDetail: { story: TStory },

  Library: { filter: TOptionFilterState }
}

export const useStackIsFocused = () => {
  const isFocused = useIsFocused();
  return { isFocused };
}

export const useStackNavigation = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return navigation;
}

export const useRouteNavigation = <T extends keyof RootStackParamList>(routeName: T) => {
  const route = useRoute<RouteProp<RootStackParamList, typeof routeName>>();
  return route;
}
