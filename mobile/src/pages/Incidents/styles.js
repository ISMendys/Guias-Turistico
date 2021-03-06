import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  title: {
    fontSize: 30,
    marginBottom: -5,
    marginTop: 15,
    color: '#13131a',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 18,
    color: '#737380'
  },

  incidentList: {
    marginTop: 15,
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },
  incidentnome: {
    width:110,
    fontSize: 18,
    color: '#41414d',
    fontWeight: 'bold',
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    marginTop:25,
    color: '#737380',
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold'
  },
  idiomas:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoria:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:-45
  },
  nc:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:-45
  },
  readerList:{
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seta:{
    width:'19%',
    alignItems:'flex-end'
},
});