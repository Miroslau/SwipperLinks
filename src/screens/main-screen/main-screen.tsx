import React, {FC} from 'react';
import {Linking, SafeAreaView} from 'react-native';
import Title from '../../components/title/title';
import CustomSlider from '../../components/custom-slider/custom-slider';
import {links} from '../../mock/links';

const TITLE: string = 'Swipper Links';

const MainScreen: FC = () => {
  const goToUrl = (url: string): void => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: ", url);
      }
    });
  };

  return (
    <SafeAreaView>
      {/*<Title title={TITLE} />*/}
      <CustomSlider items={links} handleClick={goToUrl} />
    </SafeAreaView>
  );
};

export default MainScreen;
