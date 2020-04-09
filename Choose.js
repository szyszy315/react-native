import React, {useState} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet,ActivityIndicator, Text, View, Dimensions ,Modal, Button,FlatList} from 'react-native';



const Choose = props => {
    return (
      <Modal visible = {props.texton} animationType="slide">
        <View style={styles.module1}>
        <Button title="show virus status" onPress={props.change}/>
      </View>
      <View style={styles.api}>
      <MapView style={styles.mapStyle} />

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