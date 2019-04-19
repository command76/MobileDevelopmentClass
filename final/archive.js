import React, { Component } from 'react';
import {
    Text,
    Button,
    View,
    FlatList,
    TouchableHighlight,
    AsyncStorage,
} from 'react-native';

export default class archive extends Component {
            FlatListItemSeparator = () => {
                return ( <View style={{ height: 5, backgroundColor: 'pink' }} />)


            }

            render() {    
                return (
                    <View style={{ flex: 10, flexDirection: 'column', backgroundColor: 'pink' }}>
                        <View style={{ flex: 1, alignItems: 'center', alignContent: 'center' }}>
                            <Text style={{ fontSize: 50 }}>Archive</Text>
                        </View>
                        <View style={{ flex: 9 }}>                        
                            <FlatList
                                        // ItemSeparatorComponent={({highlighted}) => (
                                        //     <View style={[style.separator, highlighted && {marginLeft: 0}]} />
                                        // )}
                                        data={this.props.navigation.state.params.archive}
                                        width='100%'
                                        extraData={[this.props.navigation.state.params.archive]}
                                        keyExtractor={(item, index) => index.toString()}
                                        ItemSeparatorComponent={this.FlatListItemSeparator}
                                        renderItem={({item /*, separators */}) => (
                                            
                                        
                                        <View style={{ padding: 10 }}>
                                            <Text style={{ fontSize: 30 }}>- {item}</Text>
                                        </View> 
                                            
                                        
                            
                        )}
                        />
                    </View>

                </View>
                )
        }

}