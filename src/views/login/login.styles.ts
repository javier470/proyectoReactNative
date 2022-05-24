import {StyleSheet} from 'react-native';

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
    color: '#fff',
  },
  textPassword: {
    fontFamily: 'Inter-VariableFont_slnt,wght',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
  textOrLogin: {
    fontFamily: 'Inter-VariableFont_slnt,wght',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
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
