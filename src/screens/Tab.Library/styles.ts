import { StyleSheet } from 'react-native';
import { fonts, statusHeight } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusHeight
  },
  titleView: {
    paddingTop: 24,
    paddingLeft: 16,
    paddingBottom: 16
  },
  title: {
    ...fonts.default.normal700,
    fontSize: 24,
    lineHeight: 36,
    color: '#000000'
  },
  searchView: {
    flexDirection: 'row',
    paddingRight: 16,
    paddingLeft: 16,
    columnGap: 8
  },
  searchButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 79,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#F2F2F2',
    overflow: 'hidden',
    columnGap: 8
  },
  filterLabel: {
    ...fonts.default.normal500,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000'
  }
});
