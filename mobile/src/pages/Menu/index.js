import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Menu() {

  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate('Guia');
  };
  function navigateToList() {
    navigation.navigate('Incidents');
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.description}>Escolha uma das pções abaixo!</Text>

      </View>

      <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={navigateToRegister}>
            <Text style={styles.actionText}>Cadastrar Guia</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={navigateToList}>
            <Text style={styles.actionText}>Encontrar um Guia</Text>
          </TouchableOpacity>
      </View>


    </View>
  );

};
