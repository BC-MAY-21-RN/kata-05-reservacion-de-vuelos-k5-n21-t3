import {TouchableHighlight} from 'react-native';
import React from 'react';
import {Eye} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const ShowUnshowEye = ({setShowPassword, showPassword}) => {
  return (
    <Eye>
      <TouchableHighlight
        onPress={() => {
          setShowPassword(!showPassword);
          console.log(showPassword);
        }}>
        <Icon
          name={showPassword ? 'eye-slash' : 'eye'}
          size={20}
          color="#C1C1C1"
        />
      </TouchableHighlight>
    </Eye>
  );
};
