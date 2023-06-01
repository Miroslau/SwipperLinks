import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {MainScreenStyled} from './main-screen.styled';
import Title from '../../components/title/title';

const TITLE: string = 'Swipper Links';

const MainScreen: FC = () => {
  return (
    <View style={MainScreenStyled.container}>
      <Title title={TITLE} />
      <View>
        <Text>Links</Text>
      </View>
      <View>
        <Text>buttons</Text>
      </View>
    </View>
  );
};

export default MainScreen;
