import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useIsFocused, useRoute, RouteProp, StackActions, CommonActions, createNavigationContainerRef } from '@react-navigation/native';

import type { TStory, TChapter, TOptionFilterState, TStoryRateVotes } from '@/models/types';

type RootStackParamList = {
  UserSignIn: undefined,
  UserSignUp: undefined,
  PageSetting: undefined,
  PageChapter: { story: TStory, chapter: TChapter, translateVersionId: number },

  StoryReview: { review: TStoryRateVotes },
  StorySpeech: { story: TStory, translateVersionId: number, chapterIndex: number },

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

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const stackNavigationRef = {
  navigate: <T extends keyof RootStackParamList>(name: T, params?: RootStackParamList[T]) => {
    navigationRef.dispatch(CommonActions.navigate(name, params));
  },

  replace: <T extends keyof RootStackParamList>(name: T, params?: RootStackParamList[T]) => {
    navigationRef.dispatch(StackActions.replace(name, params));
  },

  popToTopBeforeNavigate: <T extends keyof RootStackParamList>(name: T, params?: RootStackParamList[T]) => {
    const canPopToTop = !!navigationRef.getState()?.index;
    if (!!canPopToTop) navigationRef.dispatch(StackActions.popToTop());
    navigationRef.dispatch(CommonActions.navigate(name, params));
  }
}
