import { StyleSheet } from 'react-native';
import { wHeight } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  view: {
    flex: 1
  },
  bg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  page: {
    height: wHeight
  }
});
