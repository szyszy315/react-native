import React,{useState} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet,ActivityIndicator, Text, View, Dimensions ,Modal, Button,FlatList} from 'react-native';
import Buttonshowmap from "./Button";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }


  componentDidMount() {
    return fetch(  "https://api.covid19api.com/summary")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.Countries,
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.swith}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.swith}>
        <Buttonshowmap/>
        </View>
        <FlatList
        style={styles.mapStyle}
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text>
            {item.Country}:     {"\n"}
            {'\t'}TotalConfirmed : {item.TotalConfirmed} {"\n"}
            {'\t'}TotalDeaths : {item.TotalDeaths}
            </Text>
          )}
          keyExtractor={(item) => {item.CountryCode}}
        />
      </View>
    );
  };
}


const styles = StyleSheet.create({
  swith: {
    paddingTop:50,
  },
  text:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    flex:9,

    width: Dimensions.get('window').width*0.6,
    // height: Dimensions.get('window').height,
  },
});
