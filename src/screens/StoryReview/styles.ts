import { StyleSheet } from 'react-native';
import { footerHeight } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scroll: {
    flexGrow: 1,
    paddingTop: 16,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: footerHeight + 90,
    rowGap: 16
  }
});

export default styles;
