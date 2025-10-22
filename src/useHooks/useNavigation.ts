import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useIsFocused, useRoute, RouteProp } from '@react-navigation/native';

import { TStory } from '@/models/types';

type RootStackParamList = {
  UserSignIn: undefined,
  UserSignUp: undefined,
  StoryDetail: { story: TStory }
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
