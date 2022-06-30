import { TouchableOpacity, Text } from 'react-native';
import stylesBtnF from './buttonForm.style';
import React from 'react';

const ButtonForm = ({text, pressed, disabled}) => {
    return (
        <TouchableOpacity style={stylesBtnF.btnForm} onPress={pressed} disabled={disabled}>
            <Text style={stylesBtnF.btnText}>{text}</Text>
        </TouchableOpacity>
    );
}

export default ButtonForm;