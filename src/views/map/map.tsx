import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Modal, Pressable, Alert, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import home from '../home/home';
import {enableLatestRenderer} from 'react-native-maps';
import DriveContext from '../../state/contexts/driveContext';
import mapStyles from './map.styles';
import {driveReducer, initialDirections} from '../../state/reducers/driveAuth';

enableLatestRenderer();

const Map = ({navigation}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [stateA, dispatchA] = React.useReducer(driveReducer, initialDirections);
  const coordenadas = [
    {latitude: stateA.initAddress.lat, longitude: stateA.initAddress.lng},
    {latitude: stateA.destinyAddress.lat, longitude: stateA.destinyAddress.lng},
  ];
  const sendModal = () => {
    setModalVisible(!modalVisible)
   // console.log(address.initAddress.lat)
    navigation.navigate('Body')
  }

  return (
    <View>
      <View style={mapStyles.container}>
        <MapView
          style={mapStyles.map}
          initialRegion={{
            latitude: stateA.initAddress.lat,
            longitude: stateA.initAddress.lng,
            latitudeDelta: 0.02,
            longitudeDelta: 0.01,
          }}>
          <MapViewDirections
            origin={coordenadas[0]}
            destination={coordenadas[1]}
            apikey={'AIzaSyAl0HmQXXjnCCC6-royC4T_2H2aNLEOMjg'}
            strokeColor="#000"
            strokeWidth={4}
            optimizeWaypoints={true}

          />
        </MapView>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={mapStyles.centeredView}>
          <View style={mapStyles.modalView}>
            <Text style={mapStyles.modalText}>Thanks You!!!</Text>
            <Pressable
              style={[mapStyles.buttonModal, mapStyles.buttonClose]}
              onPress={() => sendModal()}
            >
              <Text style={mapStyles.textStyle}>Return</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[mapStyles.button, mapStyles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={mapStyles.textStyle}>Publish</Text>
      </Pressable>
    </View>
  );
};

export default Map;
