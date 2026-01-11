import { StyleSheet } from 'react-native';
import { fonts, isHasUIEdgeToEdge } from '@/theme';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    paddingBottom: !!isHasUIEdgeToEdge ? 16 : 0,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px -8px 20px 0px rgba(0, 0, 0, 0.1)'
  },
  view: {
    justifyContent: 'center',
    height: 64,
    paddingRight: 16,
    paddingLeft: 16
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#F2F2F2'
  },
  icon: {
    paddingRight: 8,
    paddingLeft: 8
  },
  text: {
    ...fonts.default.normal400,
    fontSize: 12,
    lineHeight: 16,
    color: '#A3A3A3'
  }
});

export default styles;
