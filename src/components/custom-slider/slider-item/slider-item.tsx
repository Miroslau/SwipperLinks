import React, {FC} from 'react';
import {Dimensions, View} from 'react-native';
import {SliderItemStyled} from './slider-item.styled';
import {WebView} from 'react-native-webview';

interface SliderItemProps<T> {
  item: T;
}

const SliderItem: FC<SliderItemProps<any>> = ({item}) => {
  return (
    <View style={SliderItemStyled.container}>
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        originWhitelist={['*']}
        scalesPageToFit={true}
        source={{
          uri: item,
        }}
      />
    </View>
  );
};

export default SliderItem;
