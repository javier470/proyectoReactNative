import { TouchableOpacity, Text } from 'react-native';
import stylesBtnF from './buttonForm.style';
import React from 'react';

const ButtonForm = ({text, pressed}) => {
    return (
        <TouchableOpacity style={stylesBtnF.btnForm} onPress={pressed}>
            <Text style={stylesBtnF.btnText}>{text}</Text>
        </TouchableOpacity>
    );
}

export default ButtonForm;