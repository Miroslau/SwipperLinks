import React, {FC} from 'react';
import {Animated, Dimensions, View} from 'react-native';
import {PaginationStyled} from './pagination.styled';

interface IPaginationProps<A> {
  data: A[];
  scrollX: Animated.Value;
  index?: number | null;
}

const {width} = Dimensions.get('screen');

const Pagination: FC<IPaginationProps<any>> = ({data, scrollX}) => {
  return (
    <View style={PaginationStyled.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#ccc', '#000', '#ccc'],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={idx.toString()}
            style={[PaginationStyled.dot, {width: dotWidth, backgroundColor}]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;
