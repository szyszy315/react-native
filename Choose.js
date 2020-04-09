import React, {useState} from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet,ActivityIndicator, Text, View, Dimensions ,Modal, Button,FlatList} from 'react-native';


const COORDINATE1 = [35.67737855391474, 139.76531982421875];
const COORDINATE2 = [35.67514743608467, 139.76806640625];

const Choose = props => {
    return (
      <Modal visible = {props.texton} animationType="slide">
        <View style={styles.module1}>
        <Button title="show virus status" onPress={props.change}/>
      </View>
      <View style={styles.api}>
      <MapView style={styles.mapStyle}>
          <Marker coordinate= {{latitude: 37.78825,
                longitude: -122.4324}}>
                  <Callout>
                    <Text>daraadsadasdaddasdasdads</Text>
                  </Callout>
          </Marker>
</MapView>
        </View>
      </Modal>
    );
};


const styles = StyleSheet.create({
    module1 :{
      paddingTop:50,
      flex:1,
        backgroundColor:"white",justifyContent:'center',alignItems:'center'},
    input1:{width:'80%',borderColor:"black",borderWidth: 1,padding:10},
    api:{
      flex:9,justifyContent:'center',alignItems:'center',
    },
    mapStyle: {
      flex:9,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
})

export default Choose;