import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {TitleStyled} from './title.styled';

interface ITitleProps {
  title: string;
}

const Title: FC<ITitleProps> = ({title}) => {
  return (
    <View style={TitleStyled.container}>
      <Text style={TitleStyled.title}>{title}</Text>
    </View>
  );
};

export default Title;
