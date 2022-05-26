import { StyleSheet } from 'react-native';
import Color from '../../res/colors/colors';
import Size from '../../res/fonts/size/fontSize';

const stylesRegister = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40,
    },
    viewImg: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewRegister: {
        margin: 7,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    textTitle: {
        fontFamily: 'Inter-VariableFont_slnt,wght',
        fontSize: Size.bigSize,
        fontWeight: 'bold',
        color: Color.white,
    },
    viewDouble: {
        width: '50%'
    },
    viewOne: {
        width:'70%'
    }
});

export default stylesRegister;