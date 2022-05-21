import {StyleSheet} from 'react-native';

const stylesView = StyleSheet.create({
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

  viewBody: {

    flexGrow: 2,
    margin: 40,
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1
  },

  viewBackgr: {
    margin: 5,
    marginBottom: 8,
    flex:1
  },

  viewRegister: {
    margin: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },


});



export default stylesView;
