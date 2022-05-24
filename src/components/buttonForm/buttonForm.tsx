import { TouchableOpacity, Text } from 'react-native';
import stylesBtnF from './buttonForm.style';
import React from 'react';

const ButtonForm = ({text}) => {
    return (
        <TouchableOpacity style={stylesBtnF.btnLogin}>
            <Text style={stylesBtnF.btnText}>{text}</Text>
        </TouchableOpacity>
    );
}

export default ButtonForm;