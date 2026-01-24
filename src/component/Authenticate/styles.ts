import { StyleSheet } from 'react-native';
import { fonts, wWidth } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view: {
    flex: 1
  },
  authView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 24
  },
  authText: {
    ...fonts.default.normal400,
    fontSize: 14,
    lineHeight: 21,
    color: '#9AA3B2',
    textAlign: 'center'
  },
  authButton: {
    width: (wWidth * 0.5)
  },
  loadingView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 12
  },
  loadingText: {
    ...fonts.default.normal400,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000'
  }
});

export default styles;
