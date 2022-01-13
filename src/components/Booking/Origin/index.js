import React, {useState} from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import {
  Container,
  TitleScreen,
  NextButton,
  NextText,
  ArrowBack,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {PickerData} from '../../Picker';
//import {LogOff} from '../../AutthenticationMethod/LogOff';
import {ButtonLogOff} from '../../AutthenticationMethod/ButtonLogOff';
import {OriginToDestiny} from '../OriginToDestiny';

export const OriginScreen = ({route, navegacion}) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  return (
    <View>
      <ButtonLogOff navegacion={navegacion} />

      <ArrowBack>
        <TouchableHighlight onPress={() => navegacion.goBack()}>
          <Icon name="angle-left" size={40} color="#5C6EF8" />
        </TouchableHighlight>
      </ArrowBack>

      <OriginToDestiny origin={selectedCountry} />

      {/*Test para ver que si jala la variable<Text>{selectedCountry}</Text>*/}
      <TitleScreen>Where are you {'\n'}now?</TitleScreen>

      <Container>
        <PickerData
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      </Container>

      <NextButton
        onPress={() =>
          navegacion.navigate('Destiny', {
            origin: selectedCountry,
          })
        }>
        <NextText>Next</NextText>
      </NextButton>
    </View>
  );
};
