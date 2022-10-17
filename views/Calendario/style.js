import {StyleSheet} from 'react-native';

export default StyleSheet.create({    
    container: {
        flex: 1
      },
      background: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
      view:{
        width: '100%',
        flex: 4,
        backgroundColor: '#fff',
        borderRadius: 15,
        left: 50
      },
      menuBranco:{
        width: 45,
        height: 161,
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        bottom: 687,
        left: 20,
        position: 'absolute'
      },
      menuVerde:{
        width: 30,
        height: 160,
        flex: 4,
        backgroundColor: '#d3e992',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        bottom: 527,
        left: 20,
        position: 'absolute'
      },
      menuLaranja:{
        width: 30,
        height: 160,
        flex: 4,
        backgroundColor: '#ffe3a0',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        bottom: 367,
        left: 20,
        position: 'absolute'
      },
      menuVermelho:{
        width: 30,
        height: 160,
        flex: 4,
        backgroundColor: '#ffafaf',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        bottom: 207,
        left: 20,
        position: 'absolute'
    },
    textAgenda:{
        color: '#4771b3', 
        left: 25, 
        top: 40, 
        fontSize: 24, 
        fontWeight: 'bold', 
        width: 200
    }
});      