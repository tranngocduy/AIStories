import { StyleSheet } from 'react-native';
import { fonts, statusHeight } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusHeight
  },
  view: {
    flex: 1,
    padding: 16
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingTop: 24,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 12
  },
  title: {
    ...fonts.default.normal700,
    fontSize: 24,
    lineHeight: 36,
    color: '#000000'
  },
  userView: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)'
  },
  userInfo: {
    flex: 1,
    marginLeft: 16
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  username: {
    ...fonts.default.normal700,
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  },
  userId: {
    ...fonts.default.normal400,
    fontSize: 14,
    lineHeight: 24,
    color: '#000000'
  },
  account: {
    ...fonts.default.normal400,
    fontSize: 14,
    lineHeight: 21,
    color: '#940000'
  },
  detail: {
    marginTop: 24
  },
  item: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8
  },
  icon: {
    transform: [{ rotate: '270deg' }]
  },
  labelItem: {
    ...fonts.default.normal500,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000'
  },
  labelLogout: {
    ...fonts.default.normal500,
    fontSize: 14,
    lineHeight: 21,
    color: '#940000'
  },
  version: {
    ...fonts.default.normal500,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000'
  },
  separator: {
    height: 1,
    backgroundColor: '#F2F2F2'
  }
});

export default styles;
