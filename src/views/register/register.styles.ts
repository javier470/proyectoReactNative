import { StyleSheet } from 'react-native';

const stylesRegister = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161f28',
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
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textTitle: {
        fontFamily: 'Inter-VariableFont_slnt,wght',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default stylesRegister;