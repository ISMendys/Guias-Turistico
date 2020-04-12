import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor:'#fff'
  },
 nameProfile:{
   
  fontSize: 25,
  color: '#41414d',
  fontWeight: 'bold',
  marginTop: 24,
 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  incident: {
    flex:1,
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 48,
  },

  incidentProperty: {
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 24,
  },
  

  idiomas: {
    fontSize: 15,
    color: '#737380',
    fontWeight: 'bold'
  },

  incidentValue: {
    marginTop:27,
    fontSize: 15,
    color: '#737380',
    fontWeight: 'bold'
  },
  category: {
    marginTop:-15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  category2: {
    marginTop:15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  contactBox: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFF'
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30,
  },
  denuncia: {
    marginTop:65,
    lineHeight: 30,
    alignItems:'center'
  },
  denunciaText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#e02041',
  },

  heroDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16,
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  action: {
    marginTop: 70,
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
});