import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
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
  content: {
    ...fonts.default.normal400,
    fontSize: 14,
    lineHeight: 24,
    color: '#000000'
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    columnGap: 8
  },
  labelButton: {
    ...fonts.default.normal400,
    fontSize: 12,
    lineHeight: 16,
    color: '#000000'
  },
  countView: {
    justifyContent: 'center',
    height: 16,
    paddingRight: 8,
    paddingLeft: 8,
    borderRadius: 100,
    backgroundColor: 'rgba(65, 117, 132, 0.2)'
  },
  countText: {
    ...fonts.default.normal400,
    fontSize: 10,
    color: '#417584'
  },
  loading: {
    width: 12,
    height: 12,
    transform: [{ scale: 0.6 }]
  },
  separator: {
    height: 1,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: '#F2F2F2'
  },
  line: {
    width: 1,
    height: 16,
    backgroundColor: '#D9D9D9'
  }
});

export default styles;
