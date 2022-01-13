import React from 'react';
import {ScrollView, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ButtonLogOff} from '../AutthenticationMethod/ButtonLogOff';
import {OriginToDestiny} from '../Booking/OriginToDestiny';
import {PlusButton, TittleLogin, ViewMain} from './styled';

export const FlightScreen = ({navegacion}) => {
  return (
    <ViewMain>
      <TittleLogin>My Flights</TittleLogin>
      <ButtonLogOff navegacion={navegacion} />

      <ScrollView>
        <OriginToDestiny
          CountryOrigin="MEX"
          StateOrigin="Colima"
          CountryDestiny="JAP"
          StateDestiny="Tokyo"
          DateFlight="September 3, 2020"
          PassengersNumber="2 "
        />
        <OriginToDestiny
          CountryOrigin="MEX"
          StateOrigin="Colima"
          CountryDestiny="JAP"
          StateDestiny="Tokyo"
          DateFlight="September 3, 2020"
          PassengersNumber="2"
        />
      </ScrollView>
      <PlusButton>
        <TouchableHighlight onPress={() => navegacion.navigate('Origin')}>
          <Icon name="plus-circle" size={50} color="#5c6ef8" />
        </TouchableHighlight>
      </PlusButton>
    </ViewMain>
  );
};
