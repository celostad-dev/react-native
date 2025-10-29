import React, { useState, useEffect, useRef } from 'react';
//Para instalar: npm install @react-native-async-storage/async-storage --save
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard
} from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');
  const nomeInput = useRef(null);

  useEffect(() => {
    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if (nomeStorage !== null) {
        setNome(nomeStorage);
      }
    }
    getStorage();

  }, []);


    useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem('nomes', nome);
      
    }
    saveStorage();

  }, [nome]);

  function alteraNome() {
    setNome(input);
    setInput('');
    Keyboard.dismiss();
  }

  function novoNome(){
    nomeInput.current.focus();
  }

  return (
    <View style={styles.container} >

      <TextInput
        placeholder="Seu nome..."
        value={input}
        onChangeText={(texto) => setInput(texto)}
        ref={nomeInput}
      />

      <TouchableOpacity style={styles.btn} onPress={alteraNome} >
        <Text style={styles.btnText}>Altera Nome</Text>
      </TouchableOpacity>

      <Text style={styles.texto}> {nome}</Text>

      <TouchableOpacity onPress={novoNome}>
        <Text>Novo nome</Text>
      </TouchableOpacity>
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
  texto: {
    color: '#000',
    fontSize: 35
  },
  btn: {
    backgroundColor: '#222',
    alignItems: 'center'
  },
  btnText: {
    color: '#FFF'
  }

});
