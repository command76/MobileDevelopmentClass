import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import { WebBrowser } from 'expo';
import { withNavigation } from 'react-navigation';

import { MonoText } from '../components/StyledText';
//export default
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Superheroes",
    // header: null,
  };
  _gotoScreen = (key) => {
    console.log("Going to " + key);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground style={{width:null,height:null,flex:1,resizeMode:'cover'}} source={require('../assets/images/bg.jpg')} >
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            {/* <Text style={styles.getStartedText}>Cats are amazing</Text> */}
            <FlatList
             data={[{key: 'Superman',image: require('../assets/images/Superman.png'),title: 'Man of Steel',author: 'DC Comics'}, {key: 'Spiderman',image: require('../assets/images/Spiderman.png'),title: 'Your friendly neighborhood Spiderman',author: 'Marvel'}, {key: 'Batman',image: require('../assets/images/Batman.png'),title: 'Dark Knight',author: 'DC Comics'}]}
             keyExtractor={this._keyExtractor}
              renderItem={({item}) => <TouchableOpacity onPress={(event) => { navigate('Detail', {item: item}) }}>
                <Image source={item.image} style={{width:200,height:200}} />
                <Text style={{color:'#fff', textAlign: 'center',fontSize: 20}}>{item.title}</Text>
                <Text style={{color:'red', textAlign: 'center',fontSize: 18}}>{item.author}</Text>
              </TouchableOpacity>}
            />
          </View>
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
export default withNavigation(HomeScreen);