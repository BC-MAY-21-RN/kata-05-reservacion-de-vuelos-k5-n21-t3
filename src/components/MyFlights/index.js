import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  TouchableHighlight,
  Button,
  Text,
  View,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ButtonLogOff} from '../AutthenticationMethod/ButtonLogOff';
import {OriginToDestiny} from '../Booking/OriginToDestiny';
import {PlusButton, TittleLogin, ViewMain} from './styled';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const FlightScreen = ({navegacion}) => {
  const [flights, setFligths] = useState(null);
  //const [rtData, setRtData] = useState([]);

  const VuelosRender = item => {
    console.log(item);
    return (
      <View>
        <OriginToDestiny
          origin={item.item._data.origin}
          destiny={item.item._data.destiny}
          date={item.item._data.date}
          passengers={item.item._data.passengers}
        />
      </View>
    );
  };

  const getArrayFligths = (uid, setFligths) => {
    firestore()
      .collection('Flights')
      // Filter results
      .where('IdUser', '==', uid)
      .get()
      .then(async response => {
        setFligths(response._docs);
      });
  };

  useEffect(() => {
    getArrayFligths(auth().currentUser.uid, setFligths);
    //loadRTData()
  }, []);

  return (
    <ViewMain>
      <TittleLogin>My Flights</TittleLogin>

      <ButtonLogOff navegacion={navegacion} />

      {flights ? (
        <FlatList
          data={flights}
          renderItem={VuelosRender}
          keyExtractor={item => item._data}
        />
      ) : /* 
        <FlatList
          data={rtData}
          renderItem={VuelosRTRender}
          keyExtractor={item => item.key}
        /> */
      null}

      <PlusButton>
        <TouchableHighlight onPress={() => navegacion.navigate('Origin')}>
          <Icon name="plus-circle" size={50} color="#5c6ef8" />
        </TouchableHighlight>
      </PlusButton>
    </ViewMain>
  );
};
