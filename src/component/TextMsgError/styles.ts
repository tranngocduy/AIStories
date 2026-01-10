import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 4
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4
  },
  text: {
    ...fonts.default.normal400,
    fontSize: 12,
    lineHeight: 16,
    color: '#E42D42'
  }
});

export default styles;
