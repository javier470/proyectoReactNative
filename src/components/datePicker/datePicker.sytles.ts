import { StyleSheet } from 'react-native'
import Color from '../../res/colors/colors';
import Size from '../../res/fonts/size/fontSize';

const stylesInp = StyleSheet.create({
    btn:{
        backgroundColor: Color.primary,
        padding: 13,
        borderRadius: 5,
        borderBottomWidth: 1,
        borderBottomColor: Color.pink,
    },
    btnText:{
        color: Color.white
    },
    datePicker:{
        backgroundColor: Color.primary
    }
});

export default stylesInp;