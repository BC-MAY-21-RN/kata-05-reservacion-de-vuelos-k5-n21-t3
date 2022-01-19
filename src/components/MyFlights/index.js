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
  const [flights, setFligths] = useState([]);

  /* METODO PARA RENDEREAR UNA SOLA VEZexport const getArrayFligths = (uid, setFligths) => {
    firestore()
      .collection('Flights')
      // Filter results
      .where('IdUser', '==', uid)
      .get()
      .then(async response => {
        setFligths(response._docs);
      });

        useEffect(() => {
    getArrayFligths(auth().currentUser.uid, setFligths);
    //loadRTData()
  }, []);

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

      {flights ? (
        <FlatList
          data={flights}
          renderItem={VuelosRender}
          keyExtractor={item => item._data}
        />
      ) : /* 

  };*/

  //funcion para leer la coleccion y documentos en tiempo real
  async function getArrayFligths(uid) {
    const suscriber = firestore()
      .collection('Flights')
      .where('IdUser', '==', uid) //para asegurar que muestre lo correspondiente al usuario que se logeó
      .onSnapshot(querySnapshot => {
        const temporalFlights = []; // guardamos todo en un vector temporal

        querySnapshot.forEach(documentSnapshot => {
          temporalFlights.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id, //asignamos "id" como key para usarla en la flat list
          });
        });
        setFligths(temporalFlights); //seteamos en flights el array temporal
      });
    return () => suscriber();
  }

  useEffect(() => {
    // con esto le mandamos  el usuario logeado a la funcion que lee la coleccion y con ayuda del use effect la rendereamos despues de que ya cargó la screen
    getArrayFligths(auth().currentUser.uid);
  }, []);

  const VuelosRender = item => {
    //el componente de render para el flat list
    console.log(item);
    return (
      <View>
        <OriginToDestiny
          origin={item.item.origin}
          stateOrigin={item.item.stateOrigin}
          destiny={item.item.destiny}
          stateDestiny={item.item.stateDestiny}
          date={item.item.date}
          passengers={item.item.passengers}
        />
      </View>
    );
  };

  return (
    <ViewMain>
      <TittleLogin>My Flights</TittleLogin>

      <ButtonLogOff navegacion={navegacion} />

      <FlatList
        data={flights}
        renderItem={VuelosRender}
        keyExtractor={item => item.id}
      />

      <PlusButton>
        <TouchableHighlight onPress={() => navegacion.navigate('Origin')}>
          <Icon name="plus-circle" size={50} color="#5c6ef8" />
        </TouchableHighlight>
      </PlusButton>
    </ViewMain>
  );
};
