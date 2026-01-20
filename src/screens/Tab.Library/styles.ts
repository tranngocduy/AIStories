import { StyleSheet } from 'react-native';
import { fonts, statusHeight, tabbarFooterHeight } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusHeight
  },
  view: {
    flex: 1
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
    paddingBottom: 12,
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
    columnGap: 8
  },
  filterLabel: {
    ...fonts.default.normal500,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000'
  },
  scroll: {
    flexGrow: 1,
    paddingTop: 4,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: tabbarFooterHeight,
    rowGap: 10
  },
  wrapperStyle: {
    flex: 1,
    columnGap: 10
  },
  filtered: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#000000'
  }
});

export default styles;
