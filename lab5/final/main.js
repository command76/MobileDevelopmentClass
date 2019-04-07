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
    
    this.props.navigation.navigate('addTask', { getTask: this._getTask, task: this.state.task, date: this.state.chosenDate, priority: this.state.priority, taskHolder: this.state.taskHolder });
    
}

_getTask = (state, task, date, priority, taskArray) => {
    alert(this.state.createNewTask);
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
                data={this.state.taskHolder}
                width='100%'
                extraData={[this.state.taskHolder]}
                keyExtractor={(index) => index.toString()}
                ItemSeparatorComponent={this.FlatListItemSeparator}
                renderItem={({item /*, separators */}) => (
                    
                    <TouchableHighlight
                    onPress={/*() => this._onPress(item)*/''}
                    /*onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight} */>
                        <View style={{ backgroundColor: "pink", borderWidth: 1, padding: 10 }}>
                            <Text style={{ fontSize: 30 }}>{item}</Text>
                        </View>
                    </TouchableHighlight>
                )}
                />)
        }

}

render() {
    

    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'pink' }}>
            <View style={{  alignItems: 'center', alignContent: 'center' }}>
                <Text style={{ fontSize: 50 }}>Your Tasks</Text>
            </View>
            <Button style={{ height: 50, padding: 25 }} onPress={this._createTask} title="Hello" ></Button>
            <Text>Where's my button?</Text>
           
            { ( this.state.createNewTask ) ?  _populateTasks() : null }
        </View>
    );
}
}

export default Main;