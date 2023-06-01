import {StyleSheet} from 'react-native';

export const PaginationStyled = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ccc',
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: '#000',
  },
});
