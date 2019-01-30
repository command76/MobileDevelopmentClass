import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import NameForm from './NameForm';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      nameAvailable:false, 
      isValid: true, 
      setValid:props.setValid
    };
    this.onPress = this.onPress.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    console.log(event);
    this.setState({value: event.target.value});
  }
  
  onPress(event) {
    console.log("Pressed");
    event.preventDefault();
    if(/[^a-zA-Z]+/.test(this.state.value)) {
      this.state.setValid(false);
      console.log("false");
    } else {
      this.setState({nameAvailable:true});
      this.setState({isValid:true});
      console.log("we're in there");
    }
  }
  render() {
    if(!this.state.nameAvailable) {
      return(
        <View>
          <TextInput style={styles.textInput} value={this.state.value} onChange={this.onChange} placeholder="Enter your name"></TextInput>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
        </View>
      );
    } else {
      return (
      <View><Text>Welcome and enjoy the show! {this.state.value}</Text></View>
      );
    }
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setValid = this.setValid.bind(this);
    this.state = {isValid:true};
  }
  setValid(value) {
    this.setState({isValid:value});
       console.log("getting input!");     
  }

  render() {
    
    if(this.state.isValid) {
      return (
      <View style={styles.container} flexDirection="column" alignItems='stretch'>
        <View><NameForm setValid={this.setValid}></NameForm></View>
        {/* {!this.state.isValid ? (<Text style={styles.defaultText}>Error!</Text>) : null} */}
      </View>
      );
    } else {
      return (
        <View><Text style={styles.defaultText}>Error!</Text></View>
      );
      
    }

  }
}

const styles = StyleSheet.create({
  buttonText:
  {
    color:"white",
    fontSize:40
  },
  buttonStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'blue',
    height:75,
    margin:30,
  },
  textInput:
  {
    margin:30,
    height:75,
    fontSize:20
  },
  defaultText:
  {
    fontSize:20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});