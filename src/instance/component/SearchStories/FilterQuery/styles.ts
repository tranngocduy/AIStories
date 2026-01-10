import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 54,
    paddingRight: 16,
    paddingLeft: 16
  },
  label: {
    marginRight: 48,
    ...fonts.default.normal500,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000'
  },
  selectView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    columnGap: 8
  },
  selectLabel: {
    ...fonts.default.normal400,
    fontSize: 14,
    lineHeight: 21,
    color: '#A3A3A3'
  },
  selectIcon: {
    transform: [{ rotate: '270deg' }]
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.05)'
  },
  bottomText: {
    ...fonts.default.normal500,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000',
    textDecorationLine: 'underline'
  },
  separator: {
    height: 1,
    backgroundColor: '#F2F2F2'
  }
});

export default styles;
