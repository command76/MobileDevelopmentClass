import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    AsyncStorage
  } from "react-native";
import Button from "./Button";
import Forecast from "./Forecast";
import OpenWeatherMap from "./open_weather_map";
import WeatherProject from "./weather_project.1";

class Settings extends React.Component {
  
    
    checkMultiPermissions = async() => {
        const { Permissions, FileSystem } = Expo;
        console.log(FileSystem.documentDirectory);
        let { status, expires, permissions } = await Permissions.getAsync(Permissions.CAMERA_ROLL)
        if (status !== 'granted') {
          console.log('Hey! You heve not enabled selected permissions');
          const { newStatus, expires, permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
          status = newStatus;
        }
        if(status === 'granted') {
            console.log("Granted!");
            let result = await Expo.ImagePicker.launchImageLibraryAsync({
              allowsEditing: true,
            })
    
            console.log(result);
              if (!result.cancelled) {
                console.log(this);
                console.log("Accepted!");
                this.setState({ newPostImage:result.uri, createPostModalVisible: true })
                FileSystem.copyAsync({from:result.uri,to:FileSystem.documentDirectory+"myimage.jpg"})
                .then(() => console.log("Moved to location"));
                try {
                  await AsyncStorage.setItem('@MySuperStore:key', result.uri)
                  .then(() => console.log("Saved selection to disk: " + result.uri))
                  .catch(error => console.error("AsyncStorage error: " + error.message))
                  .done();
                  console.log("saved");
                  this._retrieveData();
                } catch (error) {
                  // Error saving data
                }
              }
          }
          
      }      
      _retrieveData = async () => {
          console.log("Retrieving Data");
            try {
              const value = await AsyncStorage.getItem('@MySuperStore:key');
              if (value !== null) {
                // We have data!!
                console.log("Got data");
                console.log(value);
                this.setState({ newPostImage:value, createPostModalVisible: true })
              } else {
                console.log("No data");
              }
            } catch (error) {
              console.log(error);
              // Error retrieving data
            }
          }

         

    render() { 
      
        return(
        <View>
            <View style={styles.row}>
                <Button onPress={this.checkMultiPermissions} label="Choose Image"></Button>
            </View>
            <View style={styles.row}>
                <Button onPress={console.log(this.props.navigation.state.params.forecast)} label="Convert to Celcius"></Button>
            </View>
            <View style={styles.row}>
                <Button onPress={console.log('yay')} label="Convert to Farenheit"></Button>
            </View>
        </View>
    ) }

}

const styles = StyleSheet.create({
    overlay: { backgroundColor: "rgba(0,0,0,0.1)" },
    row: {
      flexDirection: "column",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    }
});

export default Settings;