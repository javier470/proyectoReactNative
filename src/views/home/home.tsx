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


const Home = () => {
  const [{ }, { signOut }] = React.useContext(AuthContext);
  const [seats, setSeats] = React.useState(0)



  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => { signOut() }}><Text>-</Text></TouchableOpacity>
      <View style={style.titleContainer}>
        <Text style={style.title}>Offer a ride</Text>
        <Text style={style.titleInfo}>Where do you go?</Text>
        <Text style={style.titleInfo}>Choose your destination</Text>
      </View>
      <View style={style.bodyContainer}>
        <View style={style.searchContainer}>
          <SearchInput text={'Where from?'} />
        </View>
        <View style={style.searchContainer}>
          <SearchInput text={'Where to?'} />
        </View>
        <View style={style.datepickerContainer}>
          <DatePickerBtn text={'Trip date'} />
        </View>
        <View style={style.seatsContainer}>
          <InputSimple text={'Free seats'} changed={setSeats} />
        </View>
        <View style={style.confirmContainer}>
          <ButtonForm text={'Continue'} disabled={false} pressed={() => { }} />
        </View>
      </View>
    </View>
  );
};


export default Home;
