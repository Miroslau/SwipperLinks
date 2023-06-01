import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import Title from '../../components/title/title';
import CustomSlider from '../../components/custom-slider/custom-slider';
import {links} from '../../mock/links';

const TITLE: string = 'Swipper Links';

const MainScreen: FC = () => {
  return (
    <SafeAreaView>
      {/*<Title title={TITLE} />*/}
      <CustomSlider items={links} />
    </SafeAreaView>
  );
};

export default MainScreen;
