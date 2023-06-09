import React, {FC, useRef, useState} from 'react';
import {Animated, FlatList, View} from 'react-native';
import SliderItem from './slider-item/slider-item';
import Pagination from '../pagination/pagination';

interface ICustomSliderProps<T> {
  items: T[];
}

const CustomSlider: FC<ICustomSliderProps<any>> = ({items}) => {
  // reference for position on scroll
  const scrollX = useRef(new Animated.Value(0)).current;

  // index for position
  const [index, setIndex] = useState<number | null>(0);

  // method which render an item
  const renderLinkItem = ({item}: any) => <SliderItem item={item?.link} />;

  // method which allows use scroll
  const handleOnScroll = (event: React.SyntheticEvent) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  // change Viewable items
  const handleONViewableItemsChanged = useRef(({viewableItems}: any) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View
      style={{
        height: '85%',
      }}>
      <FlatList
        data={items}
        renderItem={renderLinkItem}
        keyExtractor={(item, index) => `${item.id} - ${index}`}
        bounces={false}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleONViewableItemsChanged}
        viewabilityConfig={viabilityConfig}
        overScrollMode="never"
      />
      <Pagination data={items} scrollX={scrollX} index={index} />
    </View>
  );
};

export default CustomSlider;
