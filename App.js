import React,{useState} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet,ActivityIndicator, Text, View, Dimensions ,Modal,AsyncStorage , Button,FlatList} from 'react-native';
import Buttonshowmap from "./Button";


export default class App extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = { isLoading: true,jsondata:{}};
  }

  FlatListItemSeparator = () => {
    return (
      <View style={{
         height: .5,
         width:"100%",
         backgroundColor:"rgba(0,0,0,0.5)",
    }}
    />
    );
    }


  componentDidMount() {
    return fetch(  "https://api.covid19api.com/summary")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.Countries,
            jsondata : responseJson.Countries,
          },
          function() {}
        );
        console.log(this.state.jsondata);
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
        <Buttonshowmap covid19api={this.state.jsondata}/>
        </View>
        <FlatList
        style={styles.mapStyle}
          data={this.state.dataSource}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          keyExtractor={(item, index) =>index.toString()}
          renderItem={({ item }) => (
            <Text>
            {item.Country}:     {"\n"}
            {'\t'}TotalConfirmed : {item.TotalConfirmed} {"\n"}
            {'\t'}TotalDeaths : {item.TotalDeaths}
            </Text>
          )}
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
