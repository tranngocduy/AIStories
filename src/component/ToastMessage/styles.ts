import { StyleSheet } from 'react-native';
import { wWidth, fonts } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wWidth,
    paddingRight: 16,
    paddingLeft: 16
  },
  view: {
    flex: 1
  },
  itemView: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 12,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 12,
    borderRadius: 16,
    backgroundColor: 'transparent'
  },
  messageView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 3,
    marginRight: 12,
    marginLeft: 12
  },
  title: {
    ...fonts.default.normal700,
    fontSize: 14,
    lineHeight: 21,
    color: '#28292A'
  },
  message: {
    ...fonts.default.normal500,
    fontSize: 14,
    lineHeight: 21,
    color: '#28292A'
  },
  iconView: {
    padding: 6,
    borderRadius: 50
  },
  bgView: {
    ...StyleSheet.absoluteFill,
    borderRadius: 16,
    boxShadow: '0px 5px 15px 0px rgba(0, 0, 0, 0.2)'
  },
  closeView: {
    marginTop: 8
  },
  size: {
    width: wWidth + 200
  }
});

export default styles;
