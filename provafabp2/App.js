import React,{useState} from 'react';
import {SafeAreaView, View, Text,TextInput, Button, StyleSheet, Image, ImageBackground} from 'react-native';

const App = () => {

  const[email,setEmail] = useState('');
  const[password, setPassword] = useState('');

  const[status, setStatus] = useState('');
  const[showCupom, setShowCupom] = useState(false);

  const handleVerifyLogin = () => {
    setStatus('');
    setShowCupom(false);



  }
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground style={styles.imgfundo} source={require('./img/imgfundo.jpeg')}>
    
      <View style={styles.container2}>
        <Image style={styles.img} source={require('./img/iconi.jpeg')}/>
        <Text style={styles.header}> ZetFlix </Text>
      
        <TextInput 
          style={styles.input} 
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={t=>setEmail(t)}
          />

        <TextInput 
          style={styles.input} 
          placeholder="Digite sua senha"
          value={password}
          onChangeText={t=>setPassword(t)}
          secureTextEntry={true}
          />

        <Button title="Entrar" onPress={handleVerifyLogin}/>

        <Text style={styles.status} >{status}</Text>

        {showCupom &&
          <View style={styles.zetArea} >
            <Text style={styles.zetTitle} > codigo de cumpon: </Text>
            <Text style={styles.zetCupon} > JAHRK123 </Text>
          </View>
        }
      </View>
    </ImageBackground>
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#252a34',
    padding: 30
  },

    container2:{
    flex:2,
    marginTop:200 
  }, 

  header:{
    color: '#fff',
    fontSize: 25,
    textAlign:'center',
    marginBottom: 30
  },
  input:{
    height: 45,
    fontSize: 18,
    color: '#fff',
    backgroundColor:'#555',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 15,
    paddingRight: 10

  },
  status:{
    margin: 50,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'

  },
  zetArea:{
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20
  },
  zetTitle:{
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    
  },
  zetCupon:{
    textAlign: 'center',
    fontSize: 30
    },
  img:{
    marginLeft: 145,
    height:100,
    width: 60
  },
  imgfundo:{
    width:350,
    height:750
  }

});

export default App;
