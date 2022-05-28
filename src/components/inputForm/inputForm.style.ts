import { StyleSheet } from 'react-native'
import Color from '../../res/colors/colors';
import Size from '../../res/fonts/size/fontSize';

const stylesInp = StyleSheet.create({
    inputContainer: {
        backgroundColor: Color.primary,
        borderBottomWidth: 1,
        borderBottomColor: Color.pink,
        margin: 15,
        height: 50,
        borderRadius: 5,
        color: Color.white,
        fontSize: Size.defaultSize
    },
});

export default stylesInp;

