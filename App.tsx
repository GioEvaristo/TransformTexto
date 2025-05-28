// Dupla: Gabriel Machado e Giovanna Fonseca
// 3º Informática
// Transformador de Texto

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const logo = require('./assets/logo.webp');

  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  function maiusculo(){
    let maiusc = texto.toUpperCase();
    setResultado(maiusc);
  };
  function minusculo(){
    let minusc = texto.toLowerCase();
    setResultado(minusc);
  };  
  function inverter(){
    let inverte = texto.split('').reverse().join('');
    setResultado(inverte);
  };
  function contar(){
    let conta = texto.length;
    let result = conta.toString();

    setResultado(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
      <Text style={styles.text}>Transformador de Texto</Text>
      <Text style={styles.subtext}>Digite algo: <TextInput style={styles.input} placeholder='Digite seu Texto' onChangeText={setTexto} value={texto}></TextInput></Text>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.button1} onPress={(maiusculo)}>
            <Text style={styles.buttonText}>MAÍUSCULA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={(minusculo)}>
            <Text style={styles.buttonText}>minúscula</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
        <TouchableOpacity style={styles.button3} onPress={(inverter)}>
            <Text style={styles.buttonText}>Inverter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button4} onPress={(contar)}>
            <Text style={styles.buttonText}>Contar letras</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subtext}>{resultado}</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#137a7f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flexDirection: 'row',
    margin: 5,
  },
  button1: {
    backgroundColor: '#efb7cd',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 3,
    borderColor: '#eb84b8',
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  button2: {
    backgroundColor: '#eb84b8',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 3,
    borderColor: '#efb7cd',
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  button3: {
    backgroundColor: '#add27e',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 3,
    borderColor: '#557927',
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  button4: {
    backgroundColor: '#557927',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 3,
    borderColor: '#add27e',
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#add27e',
    textAlign: 'center',
  },
  subtext: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#add27e',
  },
  logo: {
    width: 200,
    height: 200,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 3,
    borderColor: '#eb84b8',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#efb7cd',
    margin: 3,
  },
});