import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView , Image, Text, TouchableOpacity,KeyboardAvoidingView,TextInput} from 'react-native';

import profile from '../../assets/profile.png';

import logoImg from '../../assets/profile.png';

import styles from './styles';

export default function Guia() {

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
                onChangeText={()=>{}}/>
            </View>
  
            <View>     
                <TextInput
                style={styles.input}
                placeholder="Sobrenome:"
                autoCorrect={false}
                onChangeText={()=>{}}/>
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
              onChangeText={()=>{}}/>
              <Text style={styles.asterisco}>*</Text>
          </View>
          </View>
  
          <View>     
          <Text style={styles.textInput}>CPF:</Text>
          <View style={styles.midInputsBox}>
            <TextInput 
              style={styles.midInputs}
              autoCorrect={false}
              onChangeText={()=>{}}/>
              <Text style={styles.asterisco}>*</Text>
          </View>
          </View>
  
          <View>     
          <Text style={styles.textInput}>Telefone:</Text>
          <View style={styles.midInputsBox}>
            <TextInput 
              style={styles.midInputs}
              autoCorrect={false}
              onChangeText={()=>{}}/>
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
              onChangeText={()=>{}}/>
              <Text style={styles.asterisco}>*</Text>
          </View>
          </View>
  
          <View>     
          <Text style={styles.textInput}>Descrição:</Text>
          <View style={styles.midInputsBox}>
            <TextInput 
              style={styles.midInputs}
              
              autoCorrect={false}
              onChangeText={()=>{}}/>
              <Text style={styles.asterisco}>*</Text>
          </View>
          </View>

          <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={()=>{}}>
            <Text style={styles.actionText}>Cadastrar</Text>
          </TouchableOpacity>
          </View>

          <Text style={styles.shoter}>Preencha todos os campos para concluir seu cadastro, os campos com (<Text style={styles.asterisco}>*</Text>) são obrigatorios.</Text>
         

      </View>
      </ScrollView>
    </View>
  )
  ;}