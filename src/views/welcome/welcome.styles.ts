import { StyleSheet } from 'react-native';

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
        color: 'white',
        fontSize: 35,
    },
    imgHead: {
        width: 150,
        height: 150
    }
});

export default stylesWelcome;