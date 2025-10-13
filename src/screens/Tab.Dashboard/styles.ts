import { StyleSheet } from 'react-native';
import { statusHeight } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusHeight,
    backgroundColor: '#FFFFFF'
  },
  view: {
    flex: 1
  },
  scroll: {
    flexGrow: 1,
    paddingTop: 24,
    paddingBottom: 24
  },
  separator: {
    height: 4,
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: '#F8F8F8'
  }
});
