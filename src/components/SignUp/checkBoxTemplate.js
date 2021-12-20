import React, {useState, useEffect} from 'react';
import {CheckBox, Icon} from 'react-native-elements';



export const CustomCheckBox = ({Title})=>{
    const [state, setState] = useState(false);
    return(
        <CheckBox
        checked={state.checked}
        onPress={() => setState({checked: !state.checked})}
        checkedColor="#5c6ef8"
        title={Title}
        containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}      
      /> 
    )           
}

