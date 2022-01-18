import React, {useState, useEffect} from 'react';
import {ScrollView, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ButtonLogOff} from '../AutthenticationMethod/ButtonLogOff';
import {OriginToDestiny} from '../Booking/OriginToDestiny';
import {PlusButton, TittleLogin, ViewMain} from './styled';
import auth from '@react-native-firebase/auth';

export const FlightScreen = ({navegacion}) => {
  const [user, setUser] = useState(null);
  const [flights, setFligths] = useState(null);

  const getUser = () => {
    auth().onAuthStateChanged(user => {
      user ? console.log(user) : console.log('No existe');
    });

    // getArrayFligths(user.email);
  };

  const getArrayFligths = email => {
    firestore()
      .collection('Flights')
      // Filter results
      .where('userEmail', '==', email)
      .get()
      .then(response => {
        console.log(response);
        setFligths(response);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ViewMain>
      <TittleLogin>My Flights</TittleLogin>
      <ButtonLogOff navegacion={navegacion} />

      <PlusButton>
        <TouchableHighlight onPress={() => navegacion.navigate('Origin')}>
          <Icon name="plus-circle" size={50} color="#5c6ef8" />
        </TouchableHighlight>
      </PlusButton>
    </ViewMain>
  );
};
