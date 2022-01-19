import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {
  FlightsTopContainer,
  CountryOrigin,
  StateOrigin,
  CountryDestiny,
  Plane,
  DatePassengersContainer,
  DateFlight,
  PassengersNumber,
  BlackLine,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const OriginToDestiny = ({
  origin,
  destiny,
  date,
  passengers,
  stateOrigin,
  stateDestiny,
}) => {
  return (
    <View>
      <FlightsTopContainer>
        <Plane>
          <Icon name="plane" size={20} color="#5c6ef8" />
        </Plane>
        <View>
          <CountryOrigin>{origin}</CountryOrigin>

          <StateOrigin>{stateOrigin}</StateOrigin>
        </View>

        <View>
          <CountryDestiny>{destiny}</CountryDestiny>
          <StateOrigin>{stateDestiny}</StateOrigin>
        </View>
      </FlightsTopContainer>
      <DatePassengersContainer>
        <DateFlight>{date}</DateFlight>
        <PassengersNumber>
          <Text> {passengers} Passengers</Text>
        </PassengersNumber>
      </DatePassengersContainer>

      <BlackLine></BlackLine>
    </View>
  );
};
