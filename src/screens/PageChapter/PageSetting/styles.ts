import { StyleSheet } from 'react-native';
import { fonts, footerHeight } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: footerHeight
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
    columnGap: 8
  }
});

