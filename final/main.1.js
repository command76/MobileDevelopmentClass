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


class Main extends Component { 
    constructor(props) {
        super(props);
       this.state = { createNewTask: null};
}

_createTask = () => {
    
    this.props.navigation.navigate('addTask', { getTask: this._getTask, task: this.state.task, date: this.state.chosenDate, priority: this.state.priority, taskHolder: this.state.taskHolder,  dateArray: this.state.dateArray, priorityArray: this.state.priorityArray });
    
}

_getTask = (state, task, date, priority, taskArray) => {
    // alert(this.state.createNewTask);
    this.setState({ createNewTask: state });
    this.setState({ taskHolder: taskArray })
    console.log(this.state.taskHolder);
    // console.log(task);
    // console.log(date);
    // console.log(priority);
    // return n = 'yo';
}

componentDidMount() {
    FlatListItemSeparator = () => {
        return ( <View style={{ height: 5, backgroundColor: 'black' }} />)


    }
    _populateTasks =() => {
    return (<FlatList
                // ItemSeparatorComponent={({highlighted}) => (
                //     <View style={[style.separator, highlighted && {marginLeft: 0}]} />
                // )}
                data={{key: [this.state.taskHolder,this.state.priority,this.state.chosenDate]}}
                width='100%'
                extraData={[this.state.taskHolder,this.state.priority,this.state.chosenDate]}
                keyExtractor={(index) => index.toString()}
                ItemSeparatorComponent={this.FlatListItemSeparator}
                renderItem={({item /*, separators */}) => (
                    
                    <TouchableHighlight
                    onPress={/*() => this._onPress(item)*/this._deleteItem}
                    /*onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight} */>
                        <View style={{ backgroundColor: "pink", padding: 10 }}>
                            <Text style={{ fontSize: 30 }}>- {item}</Text>
                        </View>
                    </TouchableHighlight>
                )}
                />)
        }

}

_viewArchive = () => {

    alert("Not working yet");

}

_deleteItem = () => {

    alert("Not working yet");

}

render() {
    

    return (
        <View style={{ flex: 7, flexDirection: 'column', backgroundColor: 'pink' }}>
            <View style={{ flex: 1, alignItems: 'center', alignContent: 'center' }}>
                <Text style={{ fontSize: 50 }}>Your Tasks</Text>
            </View>
            <View style={{ flex: 5 }}>
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

export default Main;