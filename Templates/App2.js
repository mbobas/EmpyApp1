import React, { Component } from 'react';
import { AppRegistry, View, ImageBackground, Text } from 'react-native';
 
export default class DisplayAnImageBackground extends Component {
    render() {
       return (
         <ImageBackground
           style={{width: 400, height: 200}}
           source={{uri: 'https://facebook.github.io/react-native/img/opengraph.png'}}
         >
           <Text>React</Text>
         </ImageBackground>
       );
     }
   }
  
   // App registration and rendering
   AppRegistry.registerComponent('DisplayAnImageBackground', () => DisplayAnImageBackground);