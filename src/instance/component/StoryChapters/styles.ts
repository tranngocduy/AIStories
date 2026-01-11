import { StyleSheet } from 'react-native';
import { fonts, statusHeight } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusHeight,
    justifyContent: 'flex-end'
  },
  view: {
    flex: 1,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden'
  },
  scroll: {
    flexGrow: 1,
    paddingRight: 16,
    paddingLeft: 16
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56
  },
  title: {
    ...fonts.default.normal700,
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  },
  close: {
    position: 'absolute',
    top: 0,
    left: 16,
    bottom: 0,
    justifyContent: 'center'
  },
  separator: {
    height: 1,
    backgroundColor: '#F2F2F2'
  }
});

export default styles;
