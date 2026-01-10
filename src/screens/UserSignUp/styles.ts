import { StyleSheet } from 'react-native';
import { fonts, footerHeight } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scroll: {
    flexGrow: 1,
    paddingTop: 50,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: footerHeight,
    rowGap: 24
  },
  label: {
    marginBottom: 4,
    ...fonts.default.normal500,
    fontSize: 12,
    lineHeight: 16,
    color: '#000000'
  }
});

export default styles;
