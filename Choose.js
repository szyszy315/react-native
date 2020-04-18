import React, {useState} from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet,ActivityIndicator, Text, View, Dimensions ,Modal, Button,FlatList} from 'react-native';


const customData = require('./country.json');


const Choose = props => {
  let position = customData.filter(i => i.country_code == "US");
  let lati = position[0].latlng[0];
  let longti=position[0].latlng[1];
  let cnt = 0;
  
    return (
      <Modal visible = {props.texton} animationType="slide">
        <View style={styles.module1}>
        <Button title="show virus status" onPress={props.change}/>
    <Text>{position.length-1}{position[0].name}{lati} {longti}</Text>
      </View>
      <View style={styles.api}>
      <MapView style={styles.mapStyle}>
        {props.covid19apic.map(maker => {
        position = customData.filter(i => i.name == maker.Country);
        if (position.length != 0) {
        lati = position[0].latlng[0];
        longti=position[0].latlng[1];
        return (
        <Marker coordinate= {{latitude:lati,longitude:longti}}
              title = {maker.Country}
              >
                  <Callout>
                    <Text>{'\t'}{maker.Country} {"\n"}
                    {'\t'}TotalConfirmed : {maker.TotalConfirmed} {"\n"}
                     {'\t'}TotalDeaths : {maker.TotalDeaths}
                     </Text>
                  </Callout>
          </Marker>
        )
      } else {
        return (<Marker coordinate= {{latitude:999,longitude:999}}
        title = {maker.Country}
        >
            <Callout>
              <Text>{'\t'}{maker.Country} {"\n"}
               </Text>
            </Callout>
    </Marker>)
      }
    }
    )
    }
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