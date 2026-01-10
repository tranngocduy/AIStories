import { StyleSheet } from 'react-native';
import { wWidth, footerHeight } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  view: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    paddingBottom: footerHeight,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden'
  },
  detail: {
    height: 440
  },
  pageMain: {
    width: wWidth
  },
  pageSub: {
    position: 'absolute',
    width: wWidth,
    opacity: 0
  }
});

export default styles;
