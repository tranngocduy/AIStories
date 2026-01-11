import { StyleSheet } from 'react-native';
import { fonts, statusHeight, footerHeight } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusHeight,
    justifyContent: 'flex-end'
  },
  view: {
    paddingBottom: footerHeight,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden'
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'flex-end'
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56
  },
  title: {
    ...fonts.default.normal700,
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  },
  label: {
    ...fonts.default.normal500,
    fontSize: 12,
    lineHeight: 16,
    color: '#036CD8'
  },
  startView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24
  },
  startItem: {
    alignItems: 'center',
    rowGap: 4
  },
  startLabel: {
    ...fonts.default.normal400,
    fontSize: 12,
    lineHeight: 16,
    color: '#000000',
    textAlign: 'center'
  },
  inputView: {
    paddingRight: 16,
    paddingLeft: 16
  },
  inputLabel: {
    marginTop: 24,
    marginBottom: 8,
    ...fonts.default.normal500,
    fontSize: 12,
    lineHeight: 16,
    color: '#000000'
  },
  inputComment: {
    height: 100,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#F2F2F2'
  },
  input: {
    flex: 1,
    margin: 0,
    padding: 8,
    ...fonts.default.normal400,
    color: '#000000'
  },
  postView: {
    position: 'absolute',
    top: 0,
    right: 16,
    bottom: 0,
    justifyContent: 'center',
    opacity: 0.4
  },
  closeView: {
    position: 'absolute',
    top: 0,
    left: 16,
    bottom: 0,
    justifyContent: 'center'
  },
  separator: {
    height: 1,
    backgroundColor: '#F2F2F2'
  }
});

export default styles;
