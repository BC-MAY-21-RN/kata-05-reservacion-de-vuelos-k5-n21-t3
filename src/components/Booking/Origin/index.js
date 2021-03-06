import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, TitleScreen, NextButton, NextText} from './styled';
import {PickerData} from '../../Picker';
import {ButtonLogOff} from '../../AutthenticationMethod/ButtonLogOff';
import {OriginToDestiny} from '../OriginToDestiny';
import {BackArrow} from '../ArrowBack';

export const OriginScreen = ({route, navegacion}) => {
  const [selectedCountry, setSelectedCountry] = useState(false);
  const [selectedState, setSelectedState] = useState(false);

  return (
    <View>
      <ButtonLogOff navegacion={navegacion} />
      <BackArrow navegacion={navegacion} />
      {/*  <ArrowBack>
        <TouchableHighlight onPress={() => navegacion.goBack()}>
          <Icon name="angle-left" size={40} color="#5C6EF8" />
        </TouchableHighlight>
      </ArrowBack> */}

      <OriginToDestiny origin={selectedCountry} stateOrigin={selectedState} />

      {/*Test para ver que si jala la variable<Text>{selectedCountry}</Text>*/}
      <TitleScreen>Where are you {'\n'}now?</TitleScreen>

      <Container>
        <PickerData
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          setSelectedState={setSelectedState}
        />
      </Container>

      <NextButton
        disabled={selectedCountry ? false : true}
        style={selectedCountry ? styles.loginEnabled : styles.loginDisabled}
        onPress={() =>
          navegacion.navigate('Destiny', {
            origin: selectedCountry,
            stateOrigin: selectedState,
          })
        }>
        <NextText>Next</NextText>
      </NextButton>
    </View>
  );
};

const styles = StyleSheet.create({
  loginEnabled: {backgroundColor: '#5c6ef8'},
  loginDisabled: {backgroundColor: '#c1c1c1'},
});
