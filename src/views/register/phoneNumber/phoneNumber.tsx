import React, {useEffect, useState} from 'react';
import {Image, InteractionManager, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ButtonForm from '../../../components/buttonForm/buttonForm';
import InputForm from '../../../components/inputForm/inputForm';
import Register from '../register';
import stylesPhoneNumber from './phoneNumber.styles';

const PhoneNumber = ({navigation}: any) => {

  const [phoneNumber, setphoneNumber] = useState();
  const [disabled, setDisable] = useState(true)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
 
  const [codes, setCodes] = useState({
    356:{
      code: 'SL',
      label: 'Salvador'
    }
  }) 
  
  const getCountryCodes=()=>{
    const items = [];
    for (let code in codes ) {
        items.push({
            label:`+(${code}) ${codes[code].label}`,
            value: code
        })
    } 
    return items; 
  }
  console.log(getCountryCodes())

  

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
        items={getCountryCodes()}
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
      <ButtonForm text={'Register'} pressed={() => navigation.navigate('Code')} />
      </View>
    </View>
  );
};

export default PhoneNumber;
