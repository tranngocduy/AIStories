import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view: {
    flex: 1
  },
  button: {
    width: '50%'
  },
  text: {
    ...fonts.default.normal400,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000'
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 12
  }
});

export default styles;
