import { StyleSheet } from 'react-native';
import { fonts, footerHeight } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoView: {
    alignItems: 'center'
  },
  logoIcon: {
    width: 90,
    height: 90
  },
  logoTitle: {
    ...fonts.default.normal700,
    fontSize: 24,
    lineHeight: 36,
    color: '#000000'
  },
  scroll: {
    flexGrow: 1,
    paddingTop: 50,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: footerHeight
  },
  form: {
    marginTop: 48,
    marginBottom: 48,
    rowGap: 24
  },
  bottomView: {
    alignItems: 'center',
    marginTop: 24
  },
  bottomText: {
    ...fonts.default.normal400,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000',
    textDecorationLine: 'underline'
  }
});

export default styles;
