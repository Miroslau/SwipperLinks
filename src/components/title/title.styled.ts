import {StyleSheet} from 'react-native';
import {normalizeSize} from '../../util/normolizeSize';

export const TitleStyled = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: normalizeSize(25),
    color: 'white',
    fontWeight: 'bold',
  },
});
