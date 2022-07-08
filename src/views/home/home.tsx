import React, { useEffect, useState } from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import ButtonForm from '../../components/buttonForm/buttonForm';
import AuthContext from '../../state/contexts/context';
import style from './home.styles'
import SearchInput from '../../components/searchAutocomplete/search';
import InputForm from '../../components/inputForm/inputForm';
import DatePickerBtn from '../../components/datePicker/datePicker';
import InputSimple from '../../components/inputSimple/inputSimple';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { initialDirections, loginReducer } from '../../state/reducers/auth';


const Home = () => {
  const [{ }, { signOut }] = React.useContext(AuthContext);
  const [seats, setSeats] = React.useState(0)
  const [{ }, { direction }] = React.useContext(AuthContext);
  const [address, dispatchAddress] = React.useReducer(loginReducer, initialDirections);
  const [address1, setAddress1] = React.useState({})
  const [address2, setAddress2] = React.useState({})

  const sendAddress = (ad1: any, ad2: any) => {
    direction(ad1, ad2)
    console.log(address)
  }

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => { signOut() }}><Text>-</Text></TouchableOpacity>
      <View style={style.titleContainer}>
        <Text style={style.title}>Offer a ride</Text>
        <Text style={style.titleInfo}>Where do you go?</Text>
        <Text style={style.titleInfo}>Choose your destination</Text>
      </View>
      <View style={style.bodyContainer}>
        <SafeAreaView style={style.searchContainer}>
          <SearchInput text={'where from?'} pressed={(data, details) => { setAddress1(details.geometry.location) }} />
        </SafeAreaView>

        <SafeAreaView style={style.search2Container}>
          <SearchInput text={'where to?'} pressed={(data, details) => { setAddress2(details.geometry.location) }} />
        </SafeAreaView>
        <View style={style.datepickerContainer}>
          <DatePickerBtn text={'Trip date'} title={'Trip date'}/>
        </View>
        <View style={style.seatsContainer}>
          <InputForm text={'Free seats'} changed={setSeats} type={'phone-pad'} secure={false} length={1}/>
        </View>
        <View style={style.confirmContainer}>
          <ButtonForm text={'Continue'} disabled={false} pressed={() => { sendAddress(address1, address2) }} />
        </View>


      </View>
    </View>
  );
};


export default Home;
