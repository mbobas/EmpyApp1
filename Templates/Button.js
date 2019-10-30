import React, { Component } from 'react';
import { ScrollView, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  render() {
    return (
        <ScrollView>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
