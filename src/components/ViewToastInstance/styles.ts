import { StyleSheet } from 'react-native';
import { statusHeight } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    paddingTop: statusHeight
  },
  view: {
    rowGap: 8
  }
});
