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
import PhotoBackdrop from './PhotoBackdrop/local_image';


var celsius;
var fahrenheit;
class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { celsius: false, fahrenheit: null, photos: [], id: 0 };

    // this.state = { forecast: null, zipcode: null, curTime: null };
  }
    
    checkMultiPermissions = async() => {
      const photos = this.state.photos;
      
      console.log(n);
      const n = this.state.id;
      // console.log(this.state.id)
      
      // console.log(this.state.id);
      // var state;
      if ( n == 4 ) {
        this.setState({ id: 0 });
      } 

      // console.log(photos[0]);
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
                this.setState(prevState => ({
                  id: prevState.id + 1
                }));
                console.log(n);

                console.log(this);
                console.log("Accepted!");
                this.setState({ newPostImage:result.uri, createPostModalVisible: true })
                FileSystem.copyAsync({from:result.uri,to:FileSystem.documentDirectory+"myimage"+n+".jpg"})
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
                this.state.photos[n] = FileSystem.documentDirectory+"myimage"+n+".jpg";
                // this.setState({photos: [FileSystem.documentDirectory+"myimage"+n+".jpg"]});                // this.state.photo[n] = FileSystem.documentDirectory+"myimage"+n+".jpg";
                let myPhoto = this.state.photos;
                
                // myPhoto.push(this.state.photos[n]);
                this.setState({photos:myPhoto});
                console.log(myPhoto);
                this.props.navigation.state.params.getPhoto(n, myPhoto[n]);  
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

          // this.props.navigation.setParams({celsius:true,fahrenheit:false});
          


          // console.log(this.props.navigation.state.params.celsius);
          // console.log(this.props.navigation.state.params.fahrenheit);
          
          _getState = () => {
             if (celsius == true) {
               var state = 1;
               fahrenheit = false;
               console.log(fahrenheit);
             } else {
               var state = 0;
               celsius = true;
               fahrenheit = false;
               console.log(celsius);
             }
             return state;
          }
          this.props.navigation.state.params.getTemp("celsius", _getState());
          
          // var celsius = NavigationActions.setParams({
          //   params: { celsius: true, fahrenheit: false },
          //   key: WeatherProject,
          // });
          // console.log(celsius);
          // var celsius = NavigationActions.setParams({
          //   params: { celsius: true, fahrenheit: false },
          //   key: WeatherProject,
          // });


          // var celsius = NavigationActions.setParams({
          //   params: { celsius: true, farenheit: false },
          //   key: WeatherProject,
          // });


          //this.setState({ forecast: celsius });
          // console.log(celsius);
          // this.props.navigation.dispatch(celsius);
          // console.log(this.props.navigation.state.params.forecast);
          // this.setState({farenheit: false});
          
          // }
         }

         _getFahrenheit = () => {
          //  const farenheitValue = (((this.props.navigation.state.params.forecast.temp * 9/5) + 32));
          //  console.log(farenheitValue);
          

          // this.props.navigation.setParams({celsius:false,fahrenheit:true});
          // this.setState({celsius:false,fahrenheit:true}, () => {
          //   console.log(this.state.fahrenheit);
          // });
          _getState = () => {
            var state = 0;
            if (fahrenheit == undefined && state == 0) {
              var state = 1;
              celsius = false;
              console.log(celsius);
            } else if (fahrenheit == true) {
              var state = 1;
              celsius = false;
              console.log(celsius);
            } else {
              var state = 0;
              fahrenheit = true;
              celsius = false;
              console.log(fahrenheit)
            }
            return state;
         }
            this.props.navigation.state.params.getTemp("fahrenheit",_getState());
            


          // var fahrenheit = NavigationActions.setParams({
          //   params: { celsius: false, fahrenheit: true },
          //   key: 'WeatherProject',
          // });
          // console.log(fahrenheit);

          // this.props.navigation.state.params.getTemp("fahrenheit",this.props.navigation.state.params.fahrenheit);

          //  this.setState({ forecast: farenheit })
          // this.setState({farenheit: true})
          // if (this.state.celsius == true) {
          // var fahrenheit = NavigationActions.setParams({
          //   params: { forecast: {temp:((this.props.navigation.state.params.forecast.temp * 9/5) + 32), main:this.props.navigation.state.params.forecast.main}},
          //   key: WeatherProject,
          // });
          //this.setState({ forecast: celsius });
          // console.log(fahrenheit.params.forecast);
          // this.props.navigation.dispatch(fahrenheit);
          // console.log(this.state.forecast);
          // console.log(this.props.navigation.state.params.forecast);
          //  console.log(this.props.navigation.state.params.forecast);
          // this.setState({celsius: false});
          // }
        }

    render() { 
      
        return(
          <View style={{backgroundColor: '#AEE8BD', flex: 1}}>
              <View style={styles.row}>
                  <Button onPress={this.checkMultiPermissions} label="Choose Image"></Button>
              </View>
              <View style={styles.row}>
                  <Button onPress={this._getCelsius} label="Convert to Celsius"></Button>
              </View>
              <View style={styles.row}>
                  <Button onPress={this._getFahrenheit} label="Convert to Farenheit"></Button>
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