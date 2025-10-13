import { StyleSheet } from 'react-native';
import { fonts, footerHeight } from '@/theme';

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px -8px 20px 0px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  },
  view: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: footerHeight
  },
  itemView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 4
  },
  label: {
    ...fonts.default.normal500,
    fontSize: 10,
    lineHeight: 12,
    color: '#A3A3A3',
    textAlign: 'center'
  },
  active: {
    color: '#000000'
  },
  bottom: {
    
  }
});

export default styles;
