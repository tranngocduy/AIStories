import { StyleSheet } from 'react-native';
import { fonts, headerHeight, statusHeight } from '@/theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    height: (statusHeight + headerHeight),
    backgroundColor: '#000000'
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    height: headerHeight,
    paddingRight: 16,
    paddingLeft: 16,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    columnGap: 12,
    overflow: 'hidden'
  },
  titleView: {
    flex: 1
  },
  title: {
    ...fonts.default.normal700,
    fontSize: 16,
    lineHeight: 24
  }
});

export default styles;
