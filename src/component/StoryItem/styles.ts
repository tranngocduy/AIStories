import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#F8F8F8',
    overflow: 'hidden'
  },
  view: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 8
  },
  label: {
    ...fonts.default.normal500,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000'
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12
  },
  summaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4
  },
  summaryLabel: {
    ...fonts.default.normal500,
    fontSize: 12,
    lineHeight: 16,
    color: '#A3A3A3'
  }
});

export default styles;
