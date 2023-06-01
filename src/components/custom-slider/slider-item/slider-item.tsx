import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {SliderItemStyled} from './slider-item.styled';

interface SliderItemProps<T> {
  item: T;
  handleClick?: (args?: any) => void;
}

const SliderItem: FC<SliderItemProps<any>> = ({item, handleClick}) => {
  return (
    <View style={SliderItemStyled.container}>
      <View style={SliderItemStyled.content}>
        <Text
          style={SliderItemStyled.title}
          ellipsizeMode="head"
          numberOfLines={2}
          onPress={handleClick?.bind(this, item)}>
          {item}
        </Text>
      </View>
    </View>
  );
};

export default SliderItem;
