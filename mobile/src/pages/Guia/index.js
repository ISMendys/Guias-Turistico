import React, {useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView , Image, Text, TouchableOpacity,Alert,TextInput} from 'react-native';

import profile from '../../assets/profile.png';

import logoImg from '../../assets/profile.png';

import styles from './styles';
import api from '../../services/api';
import Camera from '../../pages/Camera';

export default function Guia() {



  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nc, setNc] = useState('');
  const [descricao, setDescricao] = useState('');


  async function handleRegister(){
    
    const data={
      nome,
      email,
      cpf,
      nc,
      descricao,
      telefone,
      idiomas:'br'
    };

    console.log(data)
    try{
    const response = await api.post('guias', data);
    Alert.alert('CADASTRO REALIZADO','Guia cadastrado com sucesso')
    }catch{
      console.log('error')
      Alert.alert('ERRO','Erro ao cadastrar!')
    }
  }


  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack()
  };


  return (
      <View style={styles.container}>
        
      <ScrollView showsVerticalScrollIndicator={false}> 
      <TouchableOpacity onPress={navigateBack} style={styles.seta}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>

       <View style={styles.header}>
  
          <View style={styles.photo}>
            <Image source={logoImg}/>
          </View>
          
          <View style={styles.headerInput}>
            
            <View>     
                <TextInput 
                style={styles.input}
                placeholder="Nome:"
                autoCorrect={false}
                value={nome}
                onChangeText={text => setNome(text)} 
                />
            </View>
  
            <View>     
                <TextInput
                style={styles.input}
                placeholder="Sobrenome:"
                autoCorrect={false}
                value={sobrenome}
                onChangeText={text => setSobrenome(text)}/>
            </View>
          </View>
          </View>
       <View style={styles.midInput}>
  
        <View>     
          <Text style={styles.textInput}>E-mail:</Text>
          <View style={styles.midInputsBox}>
            <TextInput 
              style={styles.midInputs}
              autoCorrect={false}
              value={email}
              onChangeText={text => setEmail(text)}/>
              <Text style={styles.asterisco}>*</Text>
          </View>
          </View>

          
          <View>     
          <Text style={styles.textInput}>CPF:</Text>
          <View style={styles.midInputsBox}>
            <TextInput 
              style={styles.midInputs}
              autoCorrect={false}
              value={cpf}
              onChangeText={text => setCpf(text)}/>
              <Text style={styles.asterisco}>*</Text>
          </View>
          </View>

          <View>     
          <Text style={styles.textInput}>Telefone:</Text>
          <View style={styles.midInputsBox}>
            <TextInput 
              style={styles.midInputs}
              autoCorrect={false}
              value={telefone}
                onChangeText={text => setTelefone(text)}/>
              <Text style={styles.asterisco}>*</Text>
          </View>
          </View>

          <View>     
          <Text style={styles.textInput}>NC:</Text>
          <View style={styles.midInputsBox}>
            <TextInput 
              style={styles.midInputs}
              placeholder="00.00000.00-0"
              autoCorrect={false}
              value={nc}
              onChangeText={text => setNc(text)}/>
              <Text style={styles.asterisco}>*</Text>
          </View>
          </View>
  
          <View>     
          <Text style={styles.textInput}>Descrição:</Text>
          <View style={styles.midInputsBox}>
            <TextInput 
              style={styles.midInputs}
              
              autoCorrect={false}
              value={descricao}
              onChangeText={text => setDescricao(text)}/>
              <Text style={styles.asterisco}>*</Text>
          </View>
          </View>


          <View style={styles.actions}>
          <TouchableOpacity 
            style={styles.action} 
            onPress={handleRegister}>
            <Text style={styles.actionText}>Cadastrar</Text>
          </TouchableOpacity>
          </View>

          <Text style={styles.shoter}>Preencha todos os campos para concluir seu cadastro, os campos com (<Text style={styles.asterisco}>*</Text>) são obrigatorios.</Text>
         

      </View>
      </ScrollView>
    </View>
  );
  }