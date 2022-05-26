import { StyleSheet } from 'react-native';
import Color from '../../res/colors/colors';
import Size from '../../res/fonts/size/fontSize';

const stylesWelcome = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center'
    },
    viewHead: {
        textAlign: 'center',
        alignItems: 'center',
    },
    viewRegister: {
        margin: 7,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textHead: {
        color: Color.white,
        fontSize: Size.title1Size,
    },
    imgHead: {
        width: 150,
        height: 150
    }
});

export default stylesWelcome;