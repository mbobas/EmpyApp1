import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Bananas from './Templates/Image';
import Square from './Templates/HighAndWidth';
import PizzaTranslator from './Templates/TextInput';
import DisplayAnImageBackground from './Templates/App2';
import ButtonBasics from './Templates/Button';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={{/*flex: 1,*/  backgroundColor: 'powderblue', alignItems: 'center'}}> 
      <Text style={styles.homeText}>Witam</Text>
      </View>

      <View style={{/*flex: 2,*/ backgroundColor: 'skyblue'}}>
      <PizzaTranslator></PizzaTranslator>
   
      </View>

      <View style={{/*flex: 3,*/  backgroundColor: 'steelblue'}}>
      <DisplayAnImageBackground>
        
        </DisplayAnImageBackground>

        <ButtonBasics></ButtonBasics>
        
        </View>
        <Text style={styles.homeText}>Witam</Text>
        <Text style={styles.homeText}>Witam</Text>
        <Text style={styles.homeText}>Witam</Text>

        <Text style={styles.homeText}>Witam</Text>
        <Text style={styles.homeText}>Witam</Text>
        <Text style={styles.homeText}>Witam</Text>
        <Text style={styles.homeText}>Witam</Text>
        <Text style={styles.homeText}>Witam</Text>
        <Text style={styles.homeText}>Witam</Text>
        <Text style={styles.homeText}>Witam</Text>
        <Text style={styles.homeText}>Witam</Text>
        <Text style={styles.homeText}>Witam</Text>
        <Text style={styles.homeText}>Witam</Text>
        
    </View>
    <View>


    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
   
  },
  homeText: {
    color: '#ff3300',
    fontSize: 16,
    textShadowColor: '#801a00', 
    alignItems: 'center',
  },
  button: {
    color: '#ff3300',
    fontSize: 16,
    textShadowColor: '#801a00',
    alignItems: 'center',
  }
});
