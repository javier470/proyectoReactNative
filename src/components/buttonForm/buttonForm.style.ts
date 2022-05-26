import { StyleSheet } from 'react-native';
import Color from '../../res/colors/colors';
import Size from '../../res/fonts/size/fontSize';

const stylesBtnF = StyleSheet.create({
    btnLogin: {
        backgroundColor: Color.secondary,
        margin: 20,
        padding: 10,
        alignItems: 'center',
        height: 50,
        width: 200,
        borderRadius: 100,
    },
    btnText: {
        color: Color.white,
        fontSize: Size.defaultSize
    }
});

export default stylesBtnF;