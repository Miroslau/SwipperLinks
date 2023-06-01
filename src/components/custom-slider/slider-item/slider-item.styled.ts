import {StyleSheet, Dimensions} from 'react-native';
import {normalizeSize} from '../../../util/normolizeSize';

const {width, height} = Dimensions.get('screen');

export const SliderItemStyled = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  title: {
    fontSize: normalizeSize(24),
    fontWeight: 'bold',
    color: '#333',
  },
});
