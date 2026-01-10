import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 30,
    overflow: 'hidden'
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    ...fonts.default.normal700,
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF'
  },
  loadView: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 8
  },
  loadIcon: {
    display: 'none'
  },
  viewBG: {
    ...StyleSheet.absoluteFill
  }
});

export default styles;
