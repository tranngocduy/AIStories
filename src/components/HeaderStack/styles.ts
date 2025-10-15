import { StyleSheet } from 'react-native';
import { fonts, statusHeight, headerHeight } from '@/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: statusHeight,
    backgroundColor: 'transparent'
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    height: headerHeight,
    paddingRight: 16,
    paddingLeft: 16,
    columnGap: 16
  },
  labelView: {
    flex: 1
  },
  label: {
    ...fonts.default.normal700,
    fontSize: 24,
    lineHeight: 36,
    color: '#000000'
  },
  back: {
    width: 24,
    height: 24
  }
});

export default styles;
