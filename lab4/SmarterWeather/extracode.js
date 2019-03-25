  // AsyncStorage
    //   .getItem(STORAGE_KEY)
    //   .then(value => {
    //     if (value !== null) {
    //       this._getForecastForZip(value);
    //     }
    //   })
    //   .catch(error => console.error("AsyncStorage error: " + error.message))
    //   .done();
    //   this._retrieveData();

    // doCallbackWork = () => {
  //   function always() {
  //     console.log('I am always executed! error or success');
  //   }
  //   this.fooCallbacks(function() {
  //     always();
  //   }, function() {
  //     always();
  //   });
  // }
  // fooCallbacks = (cb) => {
  //   callback = (cb2, input, err) => {
  //     console.log("Called at " + Date.now());
  //     setTimeout(() => {
  //       console.log("finished at "+ Date.now());
  //       cb2(this.promiseNumber++);
  //     },200*input);
  //   }
  //   callback(function(res, err) {
  //     console.log(res + ': 1');
  //     callback(function(res, err) {
  //       console.log(res + ': 2');
  //       callback(function(res, err) {
  //         console.log(res + ': 3');
  //         cb();
  //       }, 1)
  //     }, 2)
  //   }, 5);
  // }
  
  // doCallbackWork1 = () => {
  //   function always() {
  //     console.log('I am always executed! error or success');
  //   }
  //   this.fooCallbacks2(function() {
  //     always();
  //   }, function() {
  //     always();
  //   });
  // }

  // fooCallbacks2 = (cb) => {
  //   let callback1 = (input) => {
  //     console.log("Called at " + Date.now());
  //     setTimeout(() => {
  //       console.log("My " + input + " job finished at "+ Date.now());
  //       callback2(2);
  //     },200*input);
  //   }
  //   let callback2 = (input) => {
  //     console.log("Called at " + Date.now());
  //     setTimeout(() => {
  //       console.log("My " + input + " job finished at "+ Date.now());
  //       callback3(3);
  //     },200*input);
  //   }
  //   let callback3 = (input) => {
  //     console.log("Called at " + Date.now());
  //     setTimeout(() => {
  //       console.log("My " + input + " job finished at "+ Date.now());
  //     },200*input);
  //   }
  //   callback1(1);
  // }

  // doAsyncWork = () => {
  //   let promise = this.foo()
  //   promise.then(function(fooResult) {
  //     console.log(fooResult); // fooResult should be what is returned by doSomething3()
  //   })
  //   .catch(function(err) {
  //     console.error(err); // Can be thrown by any 
  //   })
  //   .done(function() {
  //     console.log('I am always executed! error or success');
  //   });
  // }

  // promiseNumber = 0;
  // doSomething = (input) => {
  //   return new Promise((resolve, reject) => {
  //     console.log("Called at " + Date.now());
  //     setTimeout(() => {
  //       console.log("finished at "+ Date.now());
  //       resolve(this.promiseNumber++);
  //     },200*input);
  //   });
  // }

  // fooAwait = async() => {
  //       doSomethingResult = await this.doSomething(0);
  //       console.log(doSomethingResult + ': 1');
  //       doSomething1Result = await this.doSomething(1);
  //       console.log(doSomething1Result + ': 2');
  //       doSomething2Result = await this.doSomething(2);
  //       console.log(doSomething2Result + ': 3');
  //       return this.doSomething(3);
  //     }

  // foo = () => {
  //   return this.doSomething(0)
  //     .then((doSomethingResult) => {
  //       console.log(doSomethingResult + ': 1');
  //       return this.doSomething(1);
  //     })
  //     .then((doSomething1Result) => {
  //       console.log(doSomething1Result + ': 2');
  //       return this.doSomething(2);
  //     })
  //     .then((doSomething2Result) => {
  //       console.log(doSomething2Result + ': 3');
  //       return this.doSomething(3);
  //     });
  // }
  // doAsyncWork2 = () => {
  //   this.fooAwait()
  //   .then(function(fooResult) {
  //     console.log(fooResult); // fooResult should be what is returned by doSomething3()
  //   })
  //   .catch(function(err) {
  //     console.error(err); // Can be thrown by any 
  //   })
  //   .done(function() {
  //     console.log('I am always executed! error or success');
  //   });
  // }

    
  // checkMultiPermissions = async() => {
  //   const { Permissions, FileSystem } = Expo;
  //   console.log(FileSystem.documentDirectory);
  //   let { status, expires, permissions } = await Permissions.getAsync(Permissions.CAMERA_ROLL)
  //   if (status !== 'granted') {
  //     console.log('Hey! You heve not enabled selected permissions');
  //     const { newStatus, expires, permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  //     status = newStatus;
  //   }
  //   if(status === 'granted') {
  //       console.log("Granted!");
  //       let result = await Expo.ImagePicker.launchImageLibraryAsync({
  //         allowsEditing: true,
  //       })

  //       console.log(result);
  //         if (!result.cancelled) {
  //           console.log(this);
  //           console.log("Accepted!");
  //           this.setState({ newPostImage:result.uri, createPostModalVisible: true })
  //           FileSystem.copyAsync({from:result.uri,to:FileSystem.documentDirectory+"myimage.jpg"})
  //           .then(() => console.log("Moved to location"));
  //           try {
  //             await AsyncStorage.setItem('@MySuperStore:key', result.uri)
  //             .then(() => console.log("Saved selection to disk: " + result.uri))
  //             .catch(error => console.error("AsyncStorage error: " + error.message))
  //             .done();
  //             console.log("saved");
  //             this._retrieveData();
  //           } catch (error) {
  //             // Error saving data
  //           }
  //         }
  //     }
      
  // }      
  // _retrieveData = async () => {
  //     console.log("Retrieving Data");
  //       try {
  //         const value = await AsyncStorage.getItem('@MySuperStore:key');
  //         if (value !== null) {
  //           // We have data!!
  //           console.log("Got data");
  //           console.log(value);
  //           this.setState({ newPostImage:value, createPostModalVisible: true })
  //         } else {
  //           console.log("No data");
  //         }
  //       } catch (error) {
  //         console.log(error);
  //         // Error retrieving data
  //       }
  //     }
   
   
   
   // clock = () => {
    //   this.setState({
    //     curTime : new Date().toLocaleTimeString()
    //   })
    // }

    // var tickingClock = setInterval(clock, 1000);

 {/* <View style={styles.row}>
            <Button onPress={this.doAsyncWork} label="Do Async Work"></Button>
          </View>
          <View style={styles.row}>
            <Button onPress={this.doAsyncWork2} label="Do Async Work"></Button>
          </View>
          <View style={styles.row}>
            <Button onPress={this.doCallbackWork1} label="Callbacks 2"></Button>
          </View>
          <View style={styles.row}>
            <Button onPress={this.doCallbackWork} label="Callbacks"></Button>
          </View> */}