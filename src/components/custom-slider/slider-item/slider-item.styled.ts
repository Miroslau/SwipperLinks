import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const SliderItemStyled = StyleSheet.create({
  container: {
    width: width - 50,
    margin: 20,
    height: height - 290,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
  },
});
