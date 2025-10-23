import { StyleSheet } from 'react-native';
import { fonts, statusHeight } from '@/theme';

export const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    paddingLeft: 16,
    columnGap: 12
  },
  title: {
    ...fonts.default.normal700,
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  },
  statusBar: {
    height: statusHeight,
    backgroundColor: '#000000'
  }
});
