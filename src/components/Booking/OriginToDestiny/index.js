import React from 'react';
import {View} from 'react-native';
import {
  FlightsTopContainer,
  CountryOrigin,
  StateOrigin,
  CountryDestiny,
  StateDestiny,
  Plane,
  DatePassengersContainer,
  DateFlight,
  PassengersNumber,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const OriginToDestiny = props => {
  return (
    <View>
      <FlightsTopContainer>
        <Plane>
          <Icon name="plane" size={20} color="#5c6ef8" />
        </Plane>
        <View>
          <CountryOrigin>{props.CountryOrigin}</CountryOrigin>
          <StateOrigin>{props.StateOrigin}</StateOrigin>
        </View>

        <View>
          <CountryDestiny>{props.CountryDestiny}</CountryDestiny>
          <StateDestiny>{props.StateDestiny}</StateDestiny>
        </View>
      </FlightsTopContainer>

      <DatePassengersContainer>
        <DateFlight>{props.DateFlight}</DateFlight>
        <PassengersNumber>{props.PassengersNumber}</PassengersNumber>
      </DatePassengersContainer>
    </View>
  );
};
