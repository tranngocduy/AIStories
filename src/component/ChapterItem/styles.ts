import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 8,
    paddingLeft: 8
  },
  detail: {
    flex: 1,
    marginRight: 4,
    marginLeft: 4
  },
  label: {
    ...fonts.default.normal400,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000'
  },
  active: {
    ...fonts.default.normal700,
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
