import {StyleSheet, Dimensions} from 'react-native';
import {normalizeSize} from '../../../util/normolizeSize';

const {width} = Dimensions.get('screen');

export const SliderItemStyled = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: normalizeSize(20),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3ea6ff',
  },
});
