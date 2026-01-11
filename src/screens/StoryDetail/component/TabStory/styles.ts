import { StyleSheet } from 'react-native';
import { fonts, wWidth } from '@/theme';

const styles = StyleSheet.create({
  container: {
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: '#FFFFFF'
  },
  view: {
    flexDirection: 'row',
    height: 32
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    ...fonts.default.normal500,
    fontSize: 12,
    lineHeight: 16,
    color: '#A3A3A3'
  },
  activeView: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelActive: {
    ...fonts.default.normal500,
    fontSize: 12,
    lineHeight: 16,
    color: '#000000'
  },
  indicator: {
    width: (wWidth - 32) / 3,
    height: 2,
    backgroundColor: '#000000'
  }
});

export default styles;
