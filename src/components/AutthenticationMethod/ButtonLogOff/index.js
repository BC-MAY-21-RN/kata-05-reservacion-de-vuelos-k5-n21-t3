import React from 'react';
import {LogOff} from '../LogOff';
import {LogOffButton, NextText} from './styled';

export const ButtonLogOff = ({navegacion}) => {
  return (
    <LogOffButton
      onPress={() => {
        LogOff(navegacion);
      }}>
      <NextText>Log Off</NextText>
    </LogOffButton>
  );
};
