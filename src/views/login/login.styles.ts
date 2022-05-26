import {StyleSheet} from 'react-native';
import Color from '../../res/colors/colors';
import Size from '../../res/fonts/size/fontSize';

const stylesLogin = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
  },
  imgIcon: {
    width: 40,
    height: 40,
    marginBottom: 20,
    marginRight: 10,
  },
  textTitle: {
    fontFamily: 'Inter-VariableFont_slnt,wght',
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.white,
  },
  textPassword: {
    fontFamily: 'Inter-VariableFont_slnt,wght',
    fontSize: Size.defaultSize,
    fontWeight: 'bold',
    color: Color.white,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
  textOrLogin: {
    fontFamily: 'Inter-VariableFont_slnt,wght',
    fontSize: Size.smallSize,
    fontWeight: 'bold',
    color: Color.white,
    textAlign: 'center',
    marginRight: 20,
    marginBottom: 10,
  },
  loginView: {
    margin: 7,
  },
  viewImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgView: {
    marginEnd: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default stylesLogin;
