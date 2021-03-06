import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking,ScrollView } from 'react-native';

import profile from '../../assets/profile.png';

import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const guia = route.params.guia;
  const message = `Olá ${guia.name},gostaria que voce fosse meu guia "${guia.nome}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(guia.id)}`;

  function navigateBack() {
    navigation.goBack()
  }


  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${guia.whatsapp}&text=${message}`);
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>

        <View style={styles.photoProfile}>
          <Image source={profile} />
        </View>

        <View style={styles.profileName}> 
          <Text style={styles.nameProfile}>Isael Pereira</Text>
          </View>

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>

      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Idiomas:</Text>
        <Text style={styles.idiomas}>Portugues - Nativo</Text>
        <Text style={styles.idiomas}>Inglês - Fluente</Text>
        <Text style={styles.idiomas}>Espanhol - Fluente</Text>

        <View style={styles.category}>
          <Text style={styles.incidentProperty}>Categoria:  </Text>gua ty
          <Text style={styles.incidentValue}>{guia.descricao}</Text>
        </View>

        <Text style={styles.incidentProperty}>Descrição:</Text>
        <Text style={styles.idiomas}>{guia.descricao}</Text>
        
        <View style={styles.category2}>
          <Text style={styles.incidentProperty}>NC:  </Text>
          <Text style={styles.incidentValue}>{guia.nc}</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.incidentProperty}>Data de validade:  </Text>
          <Text style={styles.incidentValue}>{guia.id}</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.denuncia}>
          <TouchableOpacity onPress={()=>{}}>
              <Text style={styles.denunciaText}>DENUNCIAR USUÁRIO</Text>
            </TouchableOpacity>
        </View>

      </View>
      
    </View>
    </ScrollView>
  );
}
