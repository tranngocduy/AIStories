import { StyleSheet } from 'react-native';
import { fonts, footerHeight } from '@/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: footerHeight
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8
  },
  pages: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    paddingRight: 8,
    paddingLeft: 8,
    borderWidth: 1,
    borderRadius: 4,
    columnGap: 8
  },
  pagesText: {
    ...fonts.default.normal500,
    fontSize: 12,
    lineHeight: 16
  },
  option: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    borderWidth: 1,
    borderRadius: 4
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 72,
    height: 32,
    borderRadius: 4,
    overflow: 'hidden',
    columnGap: 4
  },
  labelButton: {
    ...fonts.default.normal500,
    fontSize: 12,
    lineHeight: 16
  },
  bgButton: {
    ...StyleSheet.absoluteFill
  },
  prvIcon: {
    transform: [{ rotate: '90deg' }]
  },
  nextIcon: {
    transform: [{ rotate: '-90deg' }]
  },
  space: {
    flex: 1
  }
});

export default styles;
