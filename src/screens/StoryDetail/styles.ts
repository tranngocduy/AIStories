import { StyleSheet } from 'react-native';
import { wHeight, statusHeight, footerHeight } from '@/theme';

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
    minHeight: wHeight + (statusHeight - 190),
    paddingBottom: footerHeight
  }
});

export default styles;
