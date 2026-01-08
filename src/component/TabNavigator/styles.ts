import { StyleSheet } from 'react-native';
import { wWidth, fonts, footerHeight } from '@/theme';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0
  },
  view: {
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: footerHeight
  },
  tabView: {
    flexDirection: 'row',
    height: 61,
    paddingRight: 8,
    paddingLeft: 8,
    borderRadius: 61,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 2px 20px 0px rgba(0, 0, 0, 0.1)'
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    marginTop: 2,
    ...fonts.default.normal400,
    fontSize: 11,
    lineHeight: 18
  },
  icon: {
    width: 24,
    height: 24
  },
  selectedView: {
    position: 'absolute',
    top: 4,
    left: 4,
    bottom: 4,
    right: 4,
    flexDirection: 'row',
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden'
  },
  selectedItem: {
    width: Math.ceil((wWidth - 40) / 4) + 4,
    borderRadius: 100,
    backgroundColor: '#EDEDED'
  },
  tabSize: {
    width: Math.ceil((wWidth - 40) / 4)
  },
  linear: {
    ...StyleSheet.absoluteFill,
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    overflow: 'hidden'
  },
  linearGradient: {
    flex: 1
  }
});

export default styles;
