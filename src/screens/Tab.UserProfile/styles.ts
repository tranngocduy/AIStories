import { StyleSheet } from 'react-native';
import { fonts, statusHeight } from '@/theme';

export const styles = StyleSheet.create({
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
  }
});
