import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  container: {
    rowGap: 16
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 16,
    paddingLeft: 16
  },
  label: {
    ...fonts.default.normal700,
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
    textTransform: 'uppercase'
  },
  seeMore: {
    ...fonts.default.normal500,
    fontSize: 12,
    lineHeight: 16,
    color: '#000000'
  },
  scroll: {
    flexGrow: 1,
    paddingRight: 16,
    paddingLeft: 16,
    columnGap: 16
  },
  emptyView: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16
  }
});

export default styles;
