import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4
  },
  view: {
    paddingTop: 2,
    paddingRight: 4,
    paddingLeft: 4,
    paddingBottom: 2,
    borderRadius: 4,
    backgroundColor: '#555555'
  },
  label: {
    ...fonts.default.normal700,
    fontSize: 10,
    lineHeight: 12,
    color: '#FFFFFF'
  },
  star: {
    flexDirection: 'row',
    columnGap: 2
  }
});
