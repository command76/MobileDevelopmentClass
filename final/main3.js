import React, { Component } from 'react';
import {
    Text,
    Button,
    View,
    FlatList,
    TouchableHighlight,
    AsyncStorage,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { ListItem } from 'react-native-elements'



class Main extends Component { 
    constructor(props) {
        super(props);
       this.state = { createNewTask: null, data: [], taskHolder: [],archive: [], j: 0, i: 0 };
}

_createTask = () => {
    
    this.props.navigation.navigate('addTask', { getTask: this._getTask, task: this.state.task, date: this.state.chosenDate, priority: this.state.priority, taskHolder: this.state.taskHolder,  dateArray: this.state.dateArray, priorityArray: this.state.priorityArray, i: this.state.i });
    
}



_getTask = async (state, task, date, priority, taskArray, length) => {
    // alert(this.state.createNewTask);
    this.setState({ createNewTask: state });
    this.setState({ taskHolder: taskArray });
    // console.log(this.state.taskHolder);
    this.setState({ priorityArray: priority })
    this.setState({ dateArray: date });
    this.setState({ i: length });
    const myJSON = JSON.stringify(this.state.taskHolder);
    // console.log(myJSON);
    
    

    // const tasks = await AsyncStorage.setItem('tasks', this.state.taskHolder);
    // const retrieveTasks = await AsyncStorage.getItem('tasks');


    // try {
    //     await AsyncStorage.setItem('tasks', JSON.stringify([this.state.taskHolder]));
    //   } catch (error) {
    //     // Error saving data
    //     console.log("error saving data");
    //   }
    //   console.log(AsyncStorage.getItem('tasks'));
    // this.setState({data: {task: this.state.taskHolder, priority: this.state.priorityArray, date: this.state.dateArray}});
    // console.log(this.state.taskHolder);
    // console.log(this.state.priorityArray);
    // console.log(this.state.dateArray);
    // console.log(task);
    // console.log(date);
    // console.log(priority);
    // return n = 'yo';
}

componentDidMount() {
    FlatListItemSeparator = () => {
        return ( <View style={{ height: 5, backgroundColor: 'pink' }} />)


    }
    _populateTasks =() => {
    return (
            
       
            <FlatList
                // ItemSeparatorComponent={({highlighted}) => (
                //     <View style={[style.separator, highlighted && {marginLeft: 0}]} />
                // )}
                data={this.state.taskHolder}
                width='100%'
                extraData={[this.state.task,this.state.priorityArray,this.state.dateArray]}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={this.FlatListItemSeparator}
                renderItem={({item /*, separators */}) => (
                    
                    <TouchableHighlight
                    onPress={() => this._deleteItem(item.index)}
                    /*onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight} */>
                    
{(this.state.priorityArray[this.props.navigation.state.params.i] == "high") ? <View style={{ backgroundColor: "green", padding: 10 }}>
                    <Text style={{ fontSize: 30 }}>- {item}</Text>
                </View> :  <View style={{ backgroundColor: "orange", padding: 10 }}>
                    <Text style={{ fontSize: 30 }}>- {item}</Text>
                </View>}
                    </TouchableHighlight>    
                    
                
                    
                )}
                />
            )
        }

}

_viewArchive = () => {


    _storeData = async () => {
        try {
          await AsyncStorage.setItem('archive', this.state.archive);
        } catch (error) {
          // Error saving data
        }
      };
    this.props.navigation.navigate('archive', { archive: this.state.archive });

}

_deleteItem = (item) => {

    // const deletedItem = this.state.taskHolder.filter( item => item.id !== id );
    // // alert("deleted item");
    // this.setState({ taskHolder: deletedItem })
    // this.setState({taskHolder: this.state.taskHolder.pop(item)});
    const archive = this.state.taskHolder.pop(item);
    this.setState({i: this.state.i - 1});
    this.state.archive[this.state.j] = archive;
    this.setState({ j: this.state.j + 1 });
    console.log(this.state.archive);
    // console.log(this.state.i);
    this.setState({taskHolder: this.state.taskHolder});
    // console.log(this.state.taskHolder);
}

render() {
    

    return (
        <View style={{ flex: 10, flexDirection: 'column', backgroundColor: 'pink' }}>
            <View style={{ flex: 1, alignItems: 'center', alignContent: 'center' }}>
                <Text style={{ fontSize: 50 }}>Your Tasks</Text>
            </View>
            <View style={{ flex: 8 }}>
            {/* <Text>Where's my button?</Text> */}
           
            { ( this.state.createNewTask ) ?  _populateTasks() : null }
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                <Button style={{ height: 50, padding: 50 }} onPress={this._createTask} title="Add Task" ></Button>
                <Button style={{ height: 50, padding: 50 }} onPress={this._viewArchive} title="View Archive" ></Button>
            </View>
        </View>
    );
}
}

// export default Main;