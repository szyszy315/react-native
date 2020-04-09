import React, {useState} from 'react'
import { View ,StyleSheet, TextInput, Button, Modal} from 'react-native'
import Choose from "./Choose";

const Buttonshowmap = () => {
  const [showwhat,setshowwhat] = useState(false);
  const showmap = () => {
    setshowwhat(false);
  };
  const showtext = () => {
    setshowwhat(true);
  };
return (
    <View style={styles.container}>
      <View style={styles.module1}>
        <Button title="show map" onPress={showtext}/>
        </View>
        <Choose texton={showwhat} change={showmap}/>
    </View>
  );
};

const styles = StyleSheet.create({
    module1 :{
justifyContent:'center',alignItems:'center',width:'100%'},
    input1:{width:'80%',borderColor:"black",borderWidth: 1,padding:10},
})

export default Buttonshowmap;