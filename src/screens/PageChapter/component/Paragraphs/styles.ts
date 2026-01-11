import { StyleSheet } from 'react-native';
import { fonts, wWidth } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    flex: 1
  },
  scroll: {
    flexGrow: 1,
    backgroundColor: 'transparent'
  },
  content: {
    ...fonts.default.normal400
  },
  pageMain: {
    width: wWidth,
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: 'transparent'
  },
  pageSub: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
    opacity: 0
  }
});

export default styles
