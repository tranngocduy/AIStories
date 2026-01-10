import { StyleSheet } from 'react-native';
import { statusHeight } from '@/theme';

const styles = StyleSheet.create({
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

export default styles;
