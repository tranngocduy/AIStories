import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    backgroundColor: '#F2F2F2'
  },
  view: {
    paddingTop: 8,
    paddingRight: 12,
    paddingLeft: 12,
    paddingBottom: 8
  },
  label: {
    ...fonts.default.normal400,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000'
  },
  active: {
    color: '#FFFFFF'
  },
  viewBG: {
    ...StyleSheet.absoluteFill,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#FFFFFF',
    backgroundColor: 'rgba(0, 0, 0, 1)'
  }
});

export default styles;
