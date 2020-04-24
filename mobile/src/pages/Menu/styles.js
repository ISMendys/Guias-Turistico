import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({


  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
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
        alignContent:'center',
        fontSize:20,
        color:'#FFF'
      },
      title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
      },
    
      description: {
        alignItems:'center',
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
      },
      header: {
        alignItems:'center'
      },
      textInput:{
        color:'#000',
        fontSize:17,
        
      }
});