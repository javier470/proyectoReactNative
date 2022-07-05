import {StyleSheet} from 'react-native';
import Color from '../../../res/colors/colors';
import Size from '../../../res/fonts/size/fontSize';

const stylesPhoneNumber = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',

  },
  textTitle: {
    fontFamily: 'Inter-VariableFont_slnt,wght',
    fontSize: Size.defaultSize,
    fontWeight: 'bold',
    color: Color.white,
    marginTop: 30
  },
  iconStyle:{
    width: 30,
    height: 30,
  },
  containerView:{
    margin: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  containerDrop:{
    marginRight:10,
    marginLeft:10,
    marginTop: 200,
    alignItems: 'center'
  },
  textH1:{
    fontFamily: 'Inter-VariableFont_slnt,wght',
    fontSize: Size.biggestSize,
    fontWeight: 'bold',
    color: Color.white,
    alignContent:'center',
    marginBottom:50
  }

  
});

export default stylesPhoneNumber;