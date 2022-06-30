import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ButtonForm from '../../../components/buttonForm/buttonForm';
import InputForm from '../../../components/inputForm/inputForm';
import Register from '../register';
import stylesPhoneNumber from './phoneNumber.styles';

const PhoneNumber = () => {

  const [phoneNumber, setphoneNumber] = useState();
  const [disabled, setDisable] = useState(true)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  [/*const [items, setItems] = useState([
    {label: 'North America', value: 'na', disabled: true},
      {label: 'United States US +1', value: '1', parent: 'na', icon: () => <Image source={require('../../../res/img/usa.png')} style={stylesPhoneNumber.iconStyle} />},
      {label: 'Mexico MX +52', value: '52', parent: 'na', icon: () => <Image source={require('../../../res/img/banderaMexico.png')} style={stylesPhoneNumber.iconStyle} />},

    {label: 'Central America', value: 'ca', disabled: true},
      {label: 'Guatemala GT +502', value: '502', parent: 'ca', icon: () => <Image source={require('../../../res/img/banderaGuate.png')} style={stylesPhoneNumber.iconStyle} />},
      {label: 'Honduras HN +504', value: '504', parent: 'ca', icon: () => <Image source={require('../../../res/img/hn.png')} style={stylesPhoneNumber.iconStyle} />},
      {label: 'Panama PA +507', value: '507', parent: 'ca',icon: () => <Image source={require('../../../res/img/pa.png')} style={stylesPhoneNumber.iconStyle} />},

    {label: 'Europe', value: 'eu', disabled: true},
      {label: 'Portugal PT +351', value: '351', parent: 'eu', icon: () => <Image source={require('../../../res/img/pg.png')} style={stylesPhoneNumber.iconStyle} />},
      {label: 'Belgium BE +32', value: '32', parent: 'eu', icon: () => <Image source={require('../../../res/img/bg.png')} style={stylesPhoneNumber.iconStyle} />},
      {label: 'Slovenia Sl +386', value: '386', parent: 'eu',icon: () => <Image source={require('../../../res/img/sl.jpg')} style={stylesPhoneNumber.iconStyle} />},
  ]);*/]


  // Forma Segun el Pr
  const [codes, setCodes] = useState([{
    356:{
      code: 'SL',
      label: 'Salvador'
    }
  }]) 

  const register=()=>{
        
  }

  useEffect(()=>{
    
    if (phoneNumber != undefined) {
    setDisable(false)
      console.log(phoneNumber)

    }
  },[])
  return (
    <View style={stylesPhoneNumber.container}>
      <View style={stylesPhoneNumber.containerDrop}>
      <Text style={stylesPhoneNumber.textH1}>Enter your phone number</Text>
      <DropDownPicker
 
        theme="DARK"
        placeholder="select a country"
        open={open}
        value={value}
        items={codes}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setCodes}
      />
      </View>

      <View style={stylesPhoneNumber.containerView}>
        <Text style={stylesPhoneNumber.textTitle}>{value}</Text>
        <InputForm
          
          text={'Phone-Number...'}
          type={'numeric'}
          changed={setphoneNumber}
          secure={false}
          length ={8}
        />
      </View>
      <View>
      <ButtonForm
              text={'Continue'}
              //disabled={disabled}
              pressed={() => {
                console.log(phoneNumber)
                register()
              }}
            />
      </View>
    </View>
  );
};

export default PhoneNumber;
