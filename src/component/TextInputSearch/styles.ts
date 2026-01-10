import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 100,
    backgroundColor: '#F2F2F2'
  },
  input: {
    flex: 1,
    margin: 0,
    padding: 0,
    ...fonts.default.normal400,
    fontSize: 14,
    color: '#000000'
  },
  searchIcon: {
    justifyContent: 'center',
    marginRight: 8
  },
  statusView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12
  },
  status: {
    display: 'none'
  },
  borderView: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#F2F2F2'
  }
});

export default styles;
