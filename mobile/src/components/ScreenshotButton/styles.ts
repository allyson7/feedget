import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 4,
    background: theme.colors.surface_secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    position: 'relative'
  },
  removeIcon: {
    position: 'absolute',
    right: 2,
    bottom: 2
  },
  image: {
    width: 40,
    height: 40
  }
});
