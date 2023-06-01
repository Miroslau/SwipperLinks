import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {SliderItemStyled} from './slider-item.styled';

interface SliderItemProps<T> {
  item: T;
}

const SliderItem: FC<SliderItemProps<any>> = ({item}) => {
  return (
    <View style={SliderItemStyled.container}>
      <View style={SliderItemStyled.content}>
        <Text style={SliderItemStyled.title}>{item}</Text>
      </View>
    </View>
  );
};

export default SliderItem;
