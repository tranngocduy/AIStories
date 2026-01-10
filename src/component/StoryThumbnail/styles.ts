import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8'
  },
  thumbnail: {
    ...StyleSheet.absoluteFillObject
  },
  emptyView: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E7EB'
  },
  emptyLabel: {
    ...fonts.default.normal500,
    fontSize: 14,
    lineHeight: 21,
    color: '#9CA3AF'
  },
  categoryView: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
  },
  categoryTag: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  categoryLabelView: {
    justifyContent: 'center',
    height: 20,
    paddingRight: 8,
    paddingLeft: 8
  },
  categoryLabel: {
    ...fonts.default.normal700,
    fontSize: 10,
    lineHeight: 12,
    color: '#FFFFFF',
    textTransform: 'uppercase'
  },
  rateView: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    height: '50%'
  },
  rate: {
    marginLeft: 6,
    marginBottom: 8
  }
});

export default styles;
