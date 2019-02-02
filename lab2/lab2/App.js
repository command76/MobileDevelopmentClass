// test push to repository.
import React from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
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
  onChange(text) {
    console.log(text);
    this.setState({value: text});
  }
  
  onPress(event) {
    console.log("Pressed");
    event.preventDefault();
    if(/[^a-zA-Z]+/.test(this.state.value)) {
      //this.setState({setValid:false});
      // console.log(this.state.isValid);
      this.state.setValid({setValid:false});
      //console.log(this.state.setValid);
      // console.log(this.state.setValid);
    } else {
      this.setState({nameAvailable:true});
      this.setState({isValid:true});
      console.log(this.props)
      console.log(this.state.value);
    }
  }
  render() {
    const value = this.state.value;
    if(!this.state.nameAvailable) {
      return (
        <View>
          <TextInput style={styles.textInput} value={value} onChangeText={this.onChange} placeholder="Enter your name"></TextInput>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
        </View>
      );
    } else {
      return (
      <View>
        <Text style={styles.successText}>Welcome and enjoy the show! {this.state.value}</Text>
      </View>
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
       console.log(this.setValid.value)
       console.log(this.state.isValid);
       //console.log(this.state.setValid)
          
  }

  render() {
    if(this.state.isValid) {
      return (
      <View style={styles.container} flexDirection="column" alignItems='center'>
        <View><NameForm setValid={this.setValid}></NameForm></View>
        { (this.state.isValid　== true) ? null : (<Text id="error" style={styles.defaultText}>Error!</Text>)}
      </View>
      );
    } //else {
    //   return (
    //     <View style={styles.container} alignItems="center"><Text style={styles.defaultText}>Error! You entered none alphabetical characters!</Text></View>
    //   );
      
    // }

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
    width:250
  },
  textInput:
  {
    margin:30,
    height:75,
    fontSize:20
  },
  defaultText:
  {
    fontSize:40,
    color:'red'
  },
  successText:
  {
    fontSize:30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dNone: 
  {
    display:'none'
  }
});