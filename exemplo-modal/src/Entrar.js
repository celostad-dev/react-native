import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class Entrar extends Component {

  render() {
    return (
            <View style={styles.modal}>
              <Text style={styles.titleModal}>Seja Bem-vindo!</Text>
              <Button title="Sair" onPress={ this.props.fechar }/>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  modal:{
    backgroundColor: '#292929',
    width:'100%',
    height: 350,
    borderRadius: 15
  },
  titleModal:{
    paddingTop: 15,
    color: '#FFF',
    fontSize: 28,
    textAlign:'center'
  }
});