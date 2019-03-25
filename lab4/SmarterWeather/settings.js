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
import { NavigationActions } from 'react-navigation';



class Settings extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { forecast: null, zipcode: null, curTime: null };
  }
    
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

         _getCelsius = () => {
          // const celsiusValue = (this.props.navigation.state.params.forecast.temp - 32) * 5/9;
          // console.log(celsiusValue);
          // this.setState({celsius: true});
          // console.log(this.state.celsius);
          // if (this.state.farenheit == true) {
          var celsius = NavigationActions.setParams({
            params: { forecast: {temp:(this.props.navigation.state.params.forecast.temp - 32) * 5/9, main:this.props.navigation.state.params.forecast.main}},
            key: WeatherProject,
          });


          // var celsius = NavigationActions.setParams({
          //   params: { celsius: true, farenheit: false },
          //   key: WeatherProject,
          // });


          //this.setState({ forecast: celsius });
          console.log(celsius);
          this.props.navigation.dispatch(celsius);
          // console.log(this.props.navigation.state.params.forecast);
          // this.setState({farenheit: false});
          
          // }
         }

         _getFarenheit = () => {
          //  const farenheitValue = (((this.props.navigation.state.params.forecast.temp * 9/5) + 32));
          //  console.log(farenheitValue);


          //  this.setState({ forecast: farenheit })
          // this.setState({farenheit: true})
          // if (this.state.celsius == true) {
          var farenheit = NavigationActions.setParams({
            params: { forecast: {temp:((this.props.navigation.state.params.forecast.temp * 9/5) + 32), main:this.props.navigation.state.params.forecast.main}},
            key: WeatherProject,
          });
          //this.setState({ forecast: celsius });
          console.log(farenheit.params.forecast);
          this.props.navigation.dispatch(farenheit);
          // console.log(this.state.forecast);
          // console.log(this.props.navigation.state.params.forecast);
          //  console.log(this.props.navigation.state.params.forecast);
          // this.setState({celsius: false});
          // }
        }

    render() { 
      
        return(
        <View>
            <View style={styles.row}>
                <Button onPress={this.checkMultiPermissions} label="Choose Image"></Button>
            </View>
            <View style={styles.row}>
                <Button onPress={this._getCelsius} label="Convert to Celsius"></Button>
            </View>
            <View style={styles.row}>
                <Button onPress={this._getFarenheit} label="Convert to Farenheit"></Button>
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