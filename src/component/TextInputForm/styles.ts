import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    height: 48
  },
  input: {
    flex: 1,
    margin: 0,
    padding: 0,
    paddingRight: 16,
    paddingLeft: 16,
    ...fonts.default.normal400,
    color: '#000000'
  },
  inputIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16
  },
  secureIcon: {
    justifyContent: 'center',
    paddingRight: 16
  },
  border: {
    ...StyleSheet.absoluteFill,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#F2F2F2'
  }
});

export default styles;
