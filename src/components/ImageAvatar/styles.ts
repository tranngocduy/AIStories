import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    borderRadius: 48,
    overflow: 'hidden'
  },
  viewBG: {
    ...StyleSheet.absoluteFillObject
  }
});
