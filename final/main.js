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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';



class Main extends Component { 
    constructor(props) {
        super(props);
       this.state = { createNewTask: null, data: [], archive: [], j: 0 };
}

_createTask = () => {
    
    this.props.navigation.navigate('addTask', { getTask: this._getTask, task: this.state.task, date: this.state.chosenDate, priority: this.state.priority, taskHolder: this.state.taskHolder,  dateArray: this.state.dateArray, priorityArray: this.state.priorityArray, i: this.state.i });
    
}




componentDidUpdate() {
    _storeTask = async () => {
        console.log('working');
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(this.state.taskHolder));
    
        } catch (error) {
            alert(error);
        }
        try {
            const tasks = await AsyncStorage.getItem('tasks');
            if (tasks !== null) {
                const asyncTask = JSON.parse(tasks);
                this.state.taskHolder = asyncTask;
                console.log(this.state.taskHolder)
                console.log(asyncTask);
            }} catch (error) {
                alert(error);
            
        }

    }
   _storeTask();
    
}


_getTask = async (state, task, date, priority, taskArray, length) => {
    // alert(this.state.createNewTask);
    this.setState({ createNewTask: state });
    this.setState({ taskHolder: taskArray });
    // console.log(this.state.taskHolder);
    this.setState({ priorityArray: priority })
    this.setState({ dateArray: date });
    this.setState({ i: length });
    // const myJSON = JSON.stringify(this.state.taskHolder);
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
    // return this.state.taskHolder;
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

_viewArchive = async () => {
    
    if (this.state.archive !== undefined) {
    try {
        await AsyncStorage.setItem('archive', JSON.stringify(this.state.archive));

    } catch (error) {
        alert(error);
    }
    try {
        const archive = await AsyncStorage.getItem('archive');
        if (archive !== null) {
            const asyncArchive = JSON.parse(archive);
            this.state.archive = asyncArchive;
            console.log(this.state.archive)
            console.log(asyncArchive);
        }} catch (error) {
            alert(error);
        
    }
}
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
                <Text style={{ fontSize: 50 }}>Your Tasks <FontAwesomeIcon icon={ faPencilAlt } size={ 50 } /></Text>
            </View>
            <View style={{ flex: 7 }}>
            {/* <Text>Where's my button?</Text> */}
           
            { ( this.state.createNewTask ) ?  _populateTasks() : null }
            </View>
            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                <TouchableHighlight style={{ padding: 50 }} onPress={this._createTask}><FontAwesomeIcon icon={ faPlusCircle } size={ 50 } /></TouchableHighlight>
                <TouchableHighlight style={{ padding: 50 }} onPress={this._viewArchive}><FontAwesomeIcon icon={ faArchive } size={ 50 } /></TouchableHighlight>
            </View>
        </View>
    );
}
}

export default Main;