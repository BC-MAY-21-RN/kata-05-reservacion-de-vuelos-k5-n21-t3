import React from 'react';
import {TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ArrowBack} from './styled';

export const BackArrow = ({navegacion}) => {
  return (
    <ArrowBack>
      <TouchableHighlight onPress={() => navegacion.goBack()}>
        <Icon name="angle-left" size={40} color="#5c6ef8" />
      </TouchableHighlight>
    </ArrowBack>
  );
};
