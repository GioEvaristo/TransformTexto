// Dupla: Gabriel Machado e Giovanna Fonseca
// 3º Informática
// Transformador de Texto

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import {useState} from 'react';

export default function App() {
  const logo = require('./assets/logo.png');
  
  const [texto, setTexto] = useState('');

  function maiusculo(texto: string){
    let maiusc = '';

    maiusc = texto.toUpperCase();

    setTexto(maiusc);
    return({setTexto});
  }

  function minusculo(texto: string){
    let minusc = '';
    
    minusc = texto.toLowerCase();

    setTexto(minusc);
    return({setTexto});
  }

  function inverte(texto: string){
    let inverter = '';
    
    inverter = texto.split('').reverse().join('');

    setTexto(inverter);
    return({setTexto});
  }

  function conta(texto: string){
    let contar = 0;
    
    contar = texto.length;

    setTexto(contar);
    return({setTexto});
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
      <Text style={styles.text}>Transformador de Texto</Text>
      <Text style={styles.subtext}>Digite algo: <TextInput style={styles.input} onChangeText={(valor) => setTexto(valor)} value={texto}></TextInput></Text>
      <Button color='#efb7cd' onPress={() => maiusculo(texto)} title='MAIÚSCULO' ></Button>
      <Button color='#eb84b8' onPress={() => minusculo(texto)} title='minúsculo'></Button>
      <Button color='#add27e' onPress={() => inverte(texto)} title='Inverter'></Button>
      <Button color='#557927' onPress={() => conta(texto)} title='Contar letras'></Button>
      <Text style={styles.subtext}>{texto}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
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
  input:{
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
