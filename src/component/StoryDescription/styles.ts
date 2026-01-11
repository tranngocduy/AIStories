import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden'
  },
  description: {
    ...fonts.default.normal400,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000'
  },
  seeMore: {
    ...fonts.default.normal400,
    fontSize: 14,
    lineHeight: 21,
    color: '#A3A3A3'
  },
  view: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0
  }
});

export default styles;
