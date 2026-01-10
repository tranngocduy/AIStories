import { StyleSheet } from 'react-native';
import { statusHeight, tabbarFooterHeight } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusHeight
  },
  view: {
    flex: 1
  },
  scroll: {
    flexGrow: 1,
    paddingTop: 24,
    paddingBottom: tabbarFooterHeight
  },
  separator: {
    height: 4,
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: '#F8F8F8'
  }
});

export default styles;