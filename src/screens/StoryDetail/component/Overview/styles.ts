import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    padding: 16
  },
  label: {
    ...fonts.default.normal700,
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  },
  detail: {
    marginTop: 8,
    marginBottom: 8
  },
  description: {
    flex: 1
  },
  name: {
    ...fonts.default.normal400,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000'
  },
  dot: {
    width: 3,
    height: 3,
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 3,
    backgroundColor: '#000000'
  },
  info: {
    flexDirection: 'row'
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
    gap: 4
  }
});

export default styles;
