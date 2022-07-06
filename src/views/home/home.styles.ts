import {StyleSheet} from 'react-native';
import Color from '../../res/colors/colors';
import Size from '../../res/fonts/size/fontSize';

const styles = StyleSheet.create({
    container:{
      flex: 1  
    },
    titleContainer:{
        flex: 1,
        alignItems: 'center',
    },
    title:{
        fontSize: Size.title1Size,
        fontFamily: 'Inter-VariableFont_slnt,wght',
        color: Color.white
    },
    titleInfo:{
        fontSize: Size.bigSize,
        fontFamily: 'Inter-VariableFont_slnt,wght',
        color: Color.white
    },
    bodyContainer:{
        flex: 3,
    },
    searchContainer:{
        margin: 25,
        marginTop: 30
    },
    datepickerContainer:{
        margin: 25,
        marginTop: 30,
    },
    seatsContainer:{
        marginTop: -13,
        margin: 25
    },
    confirmContainer:{
        alignItems: 'center'
    }
});

export default styles;