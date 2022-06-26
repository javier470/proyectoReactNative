import React, {useState} from 'react';
import stylesModalPicker from './modalPicker.style';
import InputForm from '../inputForm/inputForm';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import image from './image';

const ModalPicker = ({data = [], value = {}, onSelect = () => {}}) => {
  console.log('selected value', !!value);
  const [showOption, setShowOption] = useState(false);

  const onSelectItem = (val) => {
    setShowOption(false);
    onSelect(val);
  };

  return (
    <View style={stylesModalPicker.container}>
      
      <View>
      <TouchableOpacity
        style={stylesModalPicker.dropDownStyle}
        onPress={() => setShowOption(!showOption)}>
        <Text style={stylesModalPicker.text}>
          {!!value ? value?.name : 'Paises selection'}
        </Text>
        <Image
          style={{transform: [{rotate: showOption ? '180deg' : '0deg'}]}}
          source={image.icDropDown}
        />
        
      </TouchableOpacity>
      </View>
      
      {showOption && (
        <View >
          {data.map((val, i) => {
            return (
              <TouchableOpacity style={{
                backgroundColor:'#989FA7',
                paddingVertical: 8,
                borderRadius: 4,
                marginLeft: 50,
                marginRight: 200,
                marginBottom: 6,
                paddingHorizontal: 6 }} key={String(i)} onPress={()=>onSelectItem(val)}>
                <Text style={stylesModalPicker.text}>{val.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export {ModalPicker};
