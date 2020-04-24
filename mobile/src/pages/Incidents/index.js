import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import profile from '../../assets/profile.png';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
  const [guias, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetail(guia) {
    navigation.navigate('Detail', { guia });
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && guias.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('guias', {
      params: { page }
    });

    setIncidents([...guias, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }
  function navigateBack() {
    navigation.goBack()
  };

  useEffect(() => {
    loadIncidents();
  }, []);
 
  return (
    <View style={styles.container}>
 

      <View style={styles.header}>
        <Image source={logoImg} />
        
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} Guias</Text>.
        </Text>
              
       <TouchableOpacity onPress={navigateBack} style={styles.seta}>
        <Feather name="arrow-left" size={28} color="#E82041" />
      </TouchableOpacity>
      </View>
   
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos guias abaixo para te acompanhar!</Text>

      <FlatList
        data={guias}
        style={styles.incidentList}
        keyExtractor={guia => String(guia.id)}
        // showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: guia }) => (
          <View style={styles.incident}>

            <View style={styles.profile}>
              <View style={{width:50}}>
                <Image source={profile} />
              </View>
              <Text style={styles.incidentnome}>{guia.nome}</Text>
            </View>

            <View style={styles.idiomas}>
              <Text style={styles.incidentProperty}>Idiomas:  </Text>
              <Text style={styles.incidentValue}>{guia.idiomas}</Text>
            </View>

            <View style={styles.categoria}>
              <Text style={styles.incidentProperty}>Categoria:  </Text>
              <Text style={styles.incidentValue}>{guia.descricao}</Text>
            </View>

            <View style={styles.nc}>
              <Text style={styles.incidentProperty}>NC:  </Text>
              <Text style={styles.incidentValue}>{guia.nc}</Text>
            </View>

            <TouchableOpacity 
              style={styles.detailsButton} 
              onPress={() => navigateToDetail(guia)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />            
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
