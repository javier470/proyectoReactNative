import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ButtonForm from '../../../components/buttonForm/buttonForm';
import InputForm from '../../../components/inputForm/inputForm';
import stylesPhoneNumber from './phoneNumber.styles';

const PhoneNumber = () => {
  const [phoneNumber, setphoneNumber] = useState();
 
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'North America', value: 'na', disabled: true},
      {label: 'United States', value: 'US +1', parent: 'na', icon: () => <Image source={require('../../../res/img/usa.png')} style={stylesPhoneNumber.iconStyle} />},
      {label: 'Canada', value: 'CA +1', parent: 'na', icon: () => <Image source={require('../../../res/img/ca.png')} style={stylesPhoneNumber.iconStyle} />},
      {label: 'Mexico', value: 'MX +52', parent: 'na', icon: () => <Image source={require('../../../res/img/banderaMexico.png')} style={stylesPhoneNumber.iconStyle} />},

    {label: 'Central America', value: 'ca', disabled: true},
      {label: 'Guatemala', value: 'GT +502', parent: 'ca', icon: () => <Image source={require('../../../res/img/banderaGuate.png')} style={stylesPhoneNumber.iconStyle} />},
      {label: 'Honduras', value: 'HN +504', parent: 'ca', icon: () => <Image source={require('../../../res/img/hn.png')} style={stylesPhoneNumber.iconStyle} />},
      {label: 'Panama', value: 'PA +507', parent: 'ca',icon: () => <Image source={require('../../../res/img/pa.png')} style={stylesPhoneNumber.iconStyle} />},

    {label: 'Europe', value: 'eu', disabled: true},
      {label: 'Portugal', value: 'PT +351', parent: 'eu', icon: () => <Image source={require('../../../res/img/pg.png')} style={stylesPhoneNumber.iconStyle} />},
      {label: 'Belgium', value: 'BE +32', parent: 'eu', icon: () => <Image source={require('../../../res/img/bg.png')} style={stylesPhoneNumber.iconStyle} />},
      {label: 'Slovenia', value: 'Sl +386', parent: 'eu',icon: () => <Image source={require('../../../res/img/sl.jpg')} style={stylesPhoneNumber.iconStyle} />},
  ]);

  useEffect(()=>{
    console.log(value)
 
  })
  return (
    <View style={stylesPhoneNumber.container}>
      <View style={stylesPhoneNumber.containerDrop}>
      <Text style={stylesPhoneNumber.textH1}>Enter your phone number</Text>
      <DropDownPicker
        theme="DARK"
        placeholder="select a country"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      </View>

      <View style={stylesPhoneNumber.containerView}>
        <Text style={stylesPhoneNumber.textTitle}>{value}</Text>
        <InputForm
          
          text={'Phone-Number...'}
          type={'numeric'}
          changed={setphoneNumber}
          secure={false}
        />
      </View>
      <View>
      <ButtonForm
              text={'Continue'}
              
              pressed={() => {
               
              }}
            />
      </View>
    </View>
  );
};

export default PhoneNumber;
