import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    TextInput,
    DatePickerIOS,
    Picker,
    AsyncStorage
} from 'react-native';
import { NavigationActions } from 'react-navigation';

// var i = 0;

class createTask extends Component { 
    constructor(props) {
        super(props);
       this.state = { chosenDate: new Date(), task: "New Task", priority: "high", taskHolder: [], dateArray: [], priorityArray: [], i: 0 };
    //    this.taskArr = [];
    //    this.priorityArr = [{ priority: this.state.priority }];
    //    this.dateArr = [{ chosenDate: this.state.chosenDate }]
    //    this.props = { task: null, priority: null, day: null }
}

componentDidMount() {
    // _storeData = async () => {
    //     try {
    //       await AsyncStorage.setItem('hello', this.state.taskHolder[i]);
    //     } catch (error) {
    //       // Error saving data
    //     }
    //   };
}








_addTask = async () => {
    // console.log(this.state.priority);
    // console.log(i);
    // this.setState({taskArray: [this.state.task]});
    // this.setState({priorityArray: [this.state.priority]});
    // this.taskArr.push(this.state.task);

        
   


    this.state.taskHolder[this.state.i] = this.state.task;
    this.state.priorityArray[this.state.i] = this.state.priority;
    this.state.dateArray[this.state.i] = this.state.chosenDate.toString();
    // console.log(this.state.taskHolder)
    // console.log(this.taskArr);



//     try {
//         await AsyncStorage.setItem('hello', this.state.taskHolder[i]);
//       } catch (error) {
//         // Error saving data
//       }
    


//   try {
//       const value = await AsyncStorage.getItem('hello');
//       if (value !== null) {
//         // We have data!!
//         console.log(value);
//         console.log(AsyncStorage.getItem('hello'))
//       }
//     } catch (error) {
//       // Error retrieving data
//     }
    
    if ( this.props.navigation.state.params.taskHolder != undefined ) {
        // console.log(this.props.navigation.state.params.taskHolder);
        // console.log(this.props.navigation.state.params.dateArray);
        // console.log(this.props.navigation.state.params.priorityArray);
        this.props.navigation.state.params.i = this.props.navigation.state.params.i + 1;
        console.log(this.props.navigation.state.params.i);
        this.props.navigation.state.params.taskHolder[this.props.navigation.state.params.i] = this.state.task;
        this.props.navigation.state.params.priorityArray[this.props.navigation.state.params.i] = this.state.priority;
        this.props.navigation.state.params.dateArray[this.props.navigation.state.params.i] = this.state.chosenDate;
        this.props.navigation.navigate("Home", { taskHolder: this.state.taskHolder, i: this.state.i, dateArray: this.state.dateArray, priorityArray: this.state.priorityArray });
        this.props.navigation.state.params.getTask( true, this.state.task, this.props.navigation.state.params.dateArray, this.props.navigation.state.params.priorityArray, this.props.navigation.state.params.taskHolder, this.props.navigation.state.params.i );

    } else {
        this.props.navigation.navigate("Home", { taskHolder: this.state.taskHolder, dateArray: this.state.dateArray, priorityArray: this.state.priorityArray, i: this.state.i });
        this.props.navigation.state.params.getTask( true, this.state.task, this.state.dateArray, this.state.priorityArray, this.state.taskHolder, this.state.i );
        this.setState({i: this.state.i + 1});
    }


    // this.setState({ taskHolder: [this.taskArr[i]] });
    // console.log(this.state.taskHolder)
    
    
    // i++;
    // console.log(i);
    // this.props.navigation.navigate('Home', { task: this.state.task, chosenDate: this.state.chosenDate, priority: this.state.priority })

}

_setDate = (newDate) => {
    this.setState({ chosenDate: newDate });
    // this.setState({dateArray: [this.state.chosenDate]})
    // this.state.dateArray[i] = this.state.chosenDate;
    
    // console.log(this.state.dateArray);

}


render() {
    

    return (
        <View style={{flex: 1, flexDirection: 'column', alignItems: "center", alignContent: 'center' }}>
            <View style={{ height: 40 }}></View>
            <View>
                <Text style={{ fontSize: 50 }}>Add New Task</Text>
                <TextInput style={{ padding: 20, maxWidth: 280 }} placeholder="enter task details" onChangeText={(text) => this.setState({task: text})}></TextInput>
                <DatePickerIOS date={this.state.chosenDate} onDateChange={this._setDate} />
                <Picker selectedValue={this.state.priority} onValueChange={( itemValue ) => this.setState({priority: itemValue})}>
                    <Picker.Item label={"Low Priority"} value={"low"}></Picker.Item>
                    <Picker.Item label={"High Priority"} value={"high"}></Picker.Item>
                </Picker>
                <TouchableOpacity style={{ padding: 20, borderColor: 'black', backgroundColor: '#dddddd', borderWidth: 2, alignItems: 'center' }} onPress={this._addTask} ><Text style={{ fontSize: 20 }}>Create Task</Text></TouchableOpacity>
            </View>
            
        </View>
    );
}
}

export default createTask;