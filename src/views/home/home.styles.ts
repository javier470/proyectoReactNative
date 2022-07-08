import { StyleSheet } from 'react-native';
import Color from '../../res/colors/colors';
import Size from '../../res/fonts/size/fontSize';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: Size.title1Size,
        fontFamily: 'Inter-VariableFont_slnt,wght',
        color: Color.white
    },
    titleInfo: {
        fontSize: Size.bigSize,
        fontFamily: 'Inter-VariableFont_slnt,wght',
        color: Color.white
    },
    bodyContainer: {
        flex: 3,
        margin: 25
    },
    searchContainer: {
        flex: 0.3,
        marginTop: 10,
    },
    search2Container: {
        flex: 0.3,
        zIndex: -900,
        marginTop: 10,
    },
    datepickerContainer: {
        zIndex: -999,
    },
    seatsContainer: {
        flex: 0.3,
        marginTop: 10,
        zIndex: -999,
    },
    confirmContainer: {
        flex: 1,
        alignItems: 'center',
        zIndex: -999,
        marginTop: 50
    }
});

export default styles;