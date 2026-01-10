import { StyleSheet } from 'react-native';
import { wHeight } from '@/theme';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill
  },
  view: {
    flex: 1
  },
  bg: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  page: {
    height: wHeight
  }
});

export default styles;
