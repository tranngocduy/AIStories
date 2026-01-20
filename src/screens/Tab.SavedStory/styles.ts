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
    paddingBottom: 12
  },
  title: {
    ...fonts.default.normal700,
    fontSize: 24,
    lineHeight: 36,
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
  }
});

export default styles;
