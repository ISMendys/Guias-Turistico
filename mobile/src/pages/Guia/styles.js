import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

    input:{
        backgroundColor:'#FFF',
        width:'100%',
        maxWidth:150,
        fontSize:17,
        borderRadius:7,
        marginBottom:15,
        padding:10
    },
    
    headerInput: {
        marginHorizontal:15
      },
    header:{
      marginTop:15,
        flexDirection:'row',
        
    },
    seta:{
        width:'90%',
        alignItems:'flex-end'
    },
    headerProfile:{
    },
    midInputs:{
        
        backgroundColor:'#FFF',
        width:'95%',
        maxWidth:500,
        fontSize:17,
        borderRadius:7,
        marginBottom:15,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between'
    }, 
    incidentList: {
      marginTop: 32,
    },
    asterisco:{
      color:'#e02041',
      fontSize:16
    },
    midInputsBox:{
      flexDirection:'row',
      justifyContent:'space-between'
  }, 
  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:10
},

action: {
    marginTop: 20,
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionText: {
    alignContent:'center',
    fontSize:20,
    color:'#FFF'
  },
  shoter:{
    textAlign:'center'
  },
  
});