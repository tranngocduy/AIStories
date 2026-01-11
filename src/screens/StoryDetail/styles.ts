import { StyleSheet } from 'react-native';
import { wHeight, statusHeight } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    flex: 1
  },
  scroll: {
    flexGrow: 1
  },
  page: {
    height: wHeight + statusHeight - 190
  }
});

export default styles;
