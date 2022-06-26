import {StyleSheet} from 'react-native';
import Color from '../../res/colors/colors';
import Size from '../../res/fonts/size/fontSize';

const stylesModalPicker = StyleSheet.create({
  container:{
    flex:1,
    
    },
    modal:{
        backgroundColor: Color.primary,
        borderRadius: 10,
        

    },
    text:{
        color: Color.white,
        justifyContent:'center',

        

    },
    dropDownStyle:{  
        backgroundColor: 'fff',
        padding: 8,
        flexDirection: 'row',
        justifyContent:'center',
        borderRadius: 6,
        minHeight: 42,
        alignItems: 'center',
       marginBottom: 6
       
    },
    viewPanel:{
        justifyContent:'center',
        marginRight: 20,
        marginLeft:20,
        
    }

});

export default stylesModalPicker
;