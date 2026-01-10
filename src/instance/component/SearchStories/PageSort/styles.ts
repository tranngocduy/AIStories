import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    rowGap: 4
  },
  view: {
    flex: 1
  },
  scroll: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 4,
    paddingRight: 16,
    paddingLeft: 16,
    gap: 8
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.05)'
  },
  bottomText: {
    ...fonts.default.normal500,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000',
    textDecorationLine: 'underline'
  }
});

export default styles;
