// type open -a simulator to run simulator then type expo start or npm start to run expo in simulator
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage
} from "react-native";
import Button from "./Button";
import * as Expo from "expo";
import Forecast from "./Forecast";
import LocationButton from "./LocationButton";
import textStyles from "./styles/typography.js";
const STORAGE_KEY = "@SmarterWeather:zip";


import OpenWeatherMap from "./open_weather_map";

// This version uses flowers.png from local assets
//import PhotoBackdrop from "./PhotoBackdrop/local_image";

// This version pulls a specified photo from the camera roll
 import PhotoBackdrop from './PhotoBackdrop/local_image';

class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = { forecast: null, zipcode: null, curTime: null, celsius: null, farenheit: true };

  }
  
  componentDidMount() {
  
    _getCoordinates = () => {
      navigator.geolocation.getCurrentPosition(
        initialPosition => {
          //console.log('pressed');
          this._getForecastForCoords(
            initialPosition.coords.latitude,
            initialPosition.coords.longitude
          //this.setState({lat:initialPosition.coords.latitude,
          //               lon:initialPosition.coords.longitude} )
        )},
        error => {
          alert(error.message);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }


    _getCoordinates();

    this.myInterval = setInterval( () => {
        this.setState({
          curTime : new Date().toLocaleTimeString()
        })
      },1000);


      

  }

  

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  _getForecastForZip = zip => {
    // Store zip code
    AsyncStorage
      .setItem(STORAGE_KEY, zip)
      .then(() => {//this.setState({zipcode:"zipcode: " + zip});
      console.log("Saved selection to disk: " + zip);})
      .catch(error => console.error("AsyncStorage error: " + error.message))
      .done();

    OpenWeatherMap.fetchZipForecast(zip).then(forecast => {
      // console.log(this.state.zipcode);
      console.log(forecast);
      let temp = (forecast.temp - 32) * 5/9;
      console.log(temp);
      console.log(temp.toFixed(1));
      this.setState({ forecast: {temp:temp.toFixed(2),main:this.state.forecast.main}});
    });
  };

  _getForecastForCoords = (lat, lon) => {
    OpenWeatherMap.fetchLatLonForecast(lat, lon).then(forecast => {
      //this.setState({zipcode: 'lat:' + lat.toFixed(1) + " lon: " + lon.toFixed(1)});
      // console.log(zipcode);
      this.setState({ forecast: forecast });
    })
  }

  _handleTextChange = event => {
    let zip = event.nativeEvent.text;
    this._getForecastForZip(zip);
  };

  _getTemp = async (temp, state) => {
    console.log(state);
   if ( temp == "celsius" && state == 0) {
      this.setState({forecast: {temp:((this.state.forecast.temp - 32) * 5/9).toFixed(2), main:this.state.forecast.main}})

    }
    else if ( temp == 'fahrenheit' && state == 0) {
      this.setState({forecast: {temp:((this.state.forecast.temp * 9/5) + 32).toFixed(2), main:this.state.forecast.main}});
    }
  }

  
  

  _showMoreApp = () => {
    this.props.navigation.navigate('Settings', { forecast : this.state.forecast, celsius: false, fahrenheit: true, getTemp: this._getTemp, getPhoto: this._getPhoto });
  };

  
  _getPhoto = async ( n, photo ) => {
    setInterval( () => {
      console.log('hello' + n);
      // console.log("this is it:" + photo);
      
        this.setState({newPostImage: photo})
      
  }, 2000)
  };


 


  render() {
    //const zipcode = this.state.zipcode;
    // const { navigate } = this.props.navigation;
    let content = null;
    // console.log("Rendered" + this.state.newPostImage);
    if (this.state.forecast !== null) {
      content = (
        <View style={styles.row}>
        {/* {console.log(this.state.forecast)} */}
          <Text style={{ color: "#ffffff", fontSize: 32 }}>{this.state.curTime}</Text>
          <Forecast
            main={this.state.forecast.main}
            temp={this.state.forecast.temp}
          />
        </View>
      )
      
    } 
    

    return (
      <PhotoBackdrop image={this.state.newPostImage} >
        <View style={styles.overlay}>
          <View style={styles.row}>
            <Text style={textStyles.mainText}>
              Forecast for
            </Text>
            <View style={styles.zipContainer}>
              <TextInput
                style={[textStyles.mainText, styles.zipCode]}
                onSubmitEditing={this._handleTextChange}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <View style={styles.row}>
            <LocationButton onGetCoords={this._getForecastForCoords} />
          </View>
          <View style={styles.row}>
              <Button onPress={this._showMoreApp} label="Go to Settings"></Button>
          </View>
          
         

          {content}

        </View>
      </PhotoBackdrop>
    );
  }
}

const styles = StyleSheet.create({
  overlay: { backgroundColor: "rgba(0,0,0,0.1)" },
  row: {
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 24
  },
  zipContainer: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3,
    width: 80,
    height: textStyles.baseFontSize * 2,
    justifyContent: "flex-end"
  },
  zipCode: { flex: 1 }
});

export default WeatherProject;
