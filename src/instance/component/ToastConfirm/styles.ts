import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 24,
    paddingLeft: 24
  },
  view: {
    padding: 22,
    borderRadius: 34,
    backgroundColor: '#FBFBFB',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.1)',
  },
  titleView: {
    paddingBottom: 10
  },
  title: {
    ...fonts.default.normal700,
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  },
  messageView: {
    paddingBottom: 34
  },
  message: {
    ...fonts.default.normal400,
    fontSize: 14,
    lineHeight: 21,
    color: '#999999'
  },
  bottom: {
    flexDirection: 'row',
    columnGap: 8
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 48,
    backgroundColor: 'rgba(120, 120, 128, 0.16)'
  },
  label: {
    ...fonts.default.normal500,
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  }
});

export default styles;
