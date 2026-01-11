import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  view: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.1)',
  },
  overView: {
    flexDirection: 'row',
    columnGap: 16
  },
  detail: {
    flex: 1
  },
  thumbnail: {
    width: 88,
    height: 110,
    borderRadius: 4,
    overflow: 'hidden'
  },
  statusVote: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    marginTop: 12,
    ...fonts.default.normal700,
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  },
  authorView: {
    flexDirection: 'row',
    marginTop: 4
  },
  authorContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    paddingRight: 8,
    paddingLeft: 8,
    paddingBottom: 4,
    borderRadius: 4,
    backgroundColor: '#000000'
  },
  authorLabel: {
    marginLeft: 8,
    ...fonts.default.normal500,
    fontSize: 12,
    lineHeight: 16,
    color: '#FFFFFF'
  },
  statusView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 4,
    columnGap: 16
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4
  },
  statusLabel: {
    ...fonts.default.normal500,
    fontSize: 12,
    lineHeight: 16,
    color: '#A3A3A3'
  },
  bottom: {
    flexDirection: 'row',
    marginTop: 24,
    columnGap: 16
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 4,
    backgroundColor: '#000000',
    columnGap: 8
  },
  buttonLabel: {
    ...fonts.default.normal500,
    fontSize: 14,
    lineHeight: 21,
    color: '#FFFFFF'
  }
});

export default styles;
