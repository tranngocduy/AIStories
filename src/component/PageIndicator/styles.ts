import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill
  },
  view: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0
  },
  loading: {
    height: 4
  }
});

export default styles;
