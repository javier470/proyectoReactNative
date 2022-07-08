import { StyleSheet } from 'react-native'
import Color from '../../res/colors/colors';
import Size from '../../res/fonts/size/fontSize';

const stylesInp = StyleSheet.create({
    searchContainer: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        zIndex: 999,
    },
    text:{
        placeholderTextColor:Color.white,
    },
    inputSearch:{
        separator: {
            backgroundColor: Color.primary
        },
        textInput: {
            color: Color.white,
            backgroundColor: Color.primary,
            borderBottomWidth: 1,
            borderBottomColor: Color.pink,
        },
        description: {
            color: Color.white,
        },
        row: {
            backgroundColor: Color.primary,
            borderBottomWidth: 1,
            borderBottomColor: Color.pink,

        },
        poweredContainer: {
            backgroundColor: Color.primary,
        },
    }
});

export default stylesInp;