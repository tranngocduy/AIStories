import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
    paddingRight: 8,
    paddingLeft: 8,
    paddingBottom: 4,
    borderRadius: 4,
    backgroundColor: '#000000',
    overflow: 'hidden'
  },
  label: {
    ...fonts.default.normal500,
    fontSize: 12,
    lineHeight: 16,
    color: '#FFFFFF'
  }
});

export default styles;
