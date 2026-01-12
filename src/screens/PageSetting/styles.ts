import { StyleSheet } from 'react-native';
import { fonts, footerHeight } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  view: {
    flex: 1
  },
  scroll: {
    flexGrow: 1,
    paddingTop: 40,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: footerHeight,
    rowGap: 16
  },
  title: {
    marginBottom: 16,
    ...fonts.default.normal700,
    fontSize: 12,
    lineHeight: 16,
    color: '#000000'
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  label: {
    ...fonts.default.normal500,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000'
  },
  background: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16
  },
  backgroundItem: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderColor: '#F2F2F2'
  },
  backgroundActive: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center'
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 155
  },
  settingLabel: {
    ...fonts.default.normal400,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000',
    fontVariant: ['tabular-nums']
  },
  separator: {
    height: 1,
    backgroundColor: '#F2F2F2'
  }
});

export default styles;
