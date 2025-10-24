import { StyleSheet } from 'react-native';
import { fonts, statusHeight } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusHeight + 45,
    justifyContent: 'flex-end'
  },
  view: {
    flex: 1,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden'
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
  close :{
    position: 'absolute',
    top: 0,
    left: 16,
    bottom: 0,
    justifyContent: 'center'
  }
});
