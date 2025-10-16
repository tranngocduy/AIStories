import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16
  },
  searchView: {
    height: 40,
    paddingRight: 16,
    paddingLeft: 16
  },
  scroll: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 4,
    paddingRight: 16,
    paddingLeft: 16,
    gap: 8
  },
});
