import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#F2F2F2'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8
  },
  usernameView: {
    maxWidth: '50%'
  },
  username: {
    ...fonts.default.normal500,
    fontSize: 12,
    lineHeight: 16,
    color: '#417584'
  },
  status: {
    ...fonts.default.normal500,
    fontSize: 12,
    lineHeight: 16,
    color: '#A3A3A3'
  },
  createAt: {
    ...fonts.default.normal400,
    fontSize: 12,
    lineHeight: 16,
    color: '#A3A3A3'
  },
});
