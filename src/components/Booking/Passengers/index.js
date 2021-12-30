import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import {TitleScreen, NextButton, NextText, ArrowBack} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {OriginToDestiny} from '../OriginToDestiny';

import ScrollPicker from 'react-native-wheel-scrollview-picker';

export const PassengersScreen = ({navegacion}) => {
  return (
    <View>
      <ArrowBack>
        <TouchableHighlight onPress={() => navegacion.goBack()}>
          <Icon name="angle-left" size={40} color="#5c6ef8" />
        </TouchableHighlight>
      </ArrowBack>
      <OriginToDestiny
        CountryOrigin="MEX"
        StateOrigin="Colima"
        CountryDestiny="JAP"
        StateDestiny="Tokyo"
      />
      <TitleScreen>How many{'\n'}passengers?</TitleScreen>

      <ScrollPicker
        dataSource={['1', '2', '3', '4', '5', '6']}
        selectedIndex={1}
        renderItem={(data, index) => {
          //
        }}
        onValueChange={(data, selectedIndex) => {
          //
        }}
        wrapperHeight={180}
        wrapperWidth={150}
        wrapperBackground="#FFFFFF"
        itemHeight={60}
        highlightColor="#d8d8d8"
        highlightBorderWidth={2}
      />

      <NextButton onPress={() => navegacion.navigate('Confirmation')}>
        <NextText>Next</NextText>
      </NextButton>
    </View>
  );
};
