import {StyleSheet} from 'react-native';
import Color from '../../res/colors/colors';
import Size from '../../res/fonts/size/fontSize';

const mapStyles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 720,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
      flex: 1,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: Color.primary,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginTop: 600
    },
    buttonModal: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        
      },
    buttonOpen: {
      backgroundColor: Color.secondary,
    },
    buttonClose: {
      backgroundColor: Color.blue,
    },
    textStyle: {
      color: Color.white,
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

  export default mapStyles;