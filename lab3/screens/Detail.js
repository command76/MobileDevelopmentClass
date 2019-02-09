import React from 'react';
import { ScrollView, 
         View, 
         ImageBackground,
         StyleSheet, 
         Image,
         FlatList, } from 'react-native';
import { ExpoLinksView } from '@expo/samples';



export default class Detail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { 
      title: navigation.state.params.item.key,
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={{width:null,height:null,flex:1,resizeMode:'cover'}} source={require('../assets/images/bg.jpg')} >
        <ScrollView style={styles.container}>
        {console.log(this.props.navigation)}
          <Image source={this.props.navigation.state.params.item.image} ></Image>
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