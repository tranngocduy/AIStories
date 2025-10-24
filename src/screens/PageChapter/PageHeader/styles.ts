import { StyleSheet } from 'react-native';
import { fonts, headerHeight, statusHeight } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    height: (statusHeight + headerHeight),
    backgroundColor: '#000000'
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    height: headerHeight,
    paddingLeft: 16,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    columnGap: 12,
    overflow: 'hidden'
  },
  title: {
    ...fonts.default.normal700,
    fontSize: 16,
    lineHeight: 24
  }
});
