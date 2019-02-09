import React from 'react';
import { ScrollView, 
         View, 
         ImageBackground,
         StyleSheet, 
         Image,
         FlatList, } from 'react-native';
import { ExpoLinksView } from '@expo/samples';



export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Hero',
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={{width:null,height:null,flex:1,resizeMode:'cover'}} source={require('../assets/images/bg.jpg')} >
        <ScrollView style={styles.container}>
        {console.log(navigation.state.params.item)}
        
         </ScrollView>
        </ImageBackground>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 15,
    // backgroundColor: '#fff',
  },
});
{/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        {/* <ExpoLinksView /> */}