import { StyleSheet } from "react-native";
import Color from "../../../res/colors/colors";
import Size from "../../../res/fonts/size/fontSize";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 7,
        marginStart: 15,
    },
    header:{
        flex:1,
        marginBottom: 10,
        marginTop: 10,
    },
    body:{
        flex: 15,
    },
    title:{
        color: Color.white,
        fontSize: Size.biggestSize,  
    },
    infoContainer:{
        flex: 1,
        marginBottom: 10,
        marginTop: 10,
    },
    info:{
        color: Color.white,
        fontSize: Size.defaultSize,
        
    },
    form:{
        flex: 2,
        alignItems: 'center',
    }
})

export default styles