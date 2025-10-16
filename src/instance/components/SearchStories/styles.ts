import { StyleSheet } from 'react-native';
import { fonts } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  view: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden'
  }
});
