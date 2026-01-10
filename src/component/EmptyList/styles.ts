import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 8,
    ...fonts.default.normal500,
    fontSize: 14,
    lineHeight: 21,
    color: '#9CA3AF'
  }
});

export default styles;
