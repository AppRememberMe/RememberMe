import {StyleSheet} from 'react-native';

export default StyleSheet.create({    
    container: {
        flex: 1,
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    view:{
        backgroundColor: '#fff',
        left: 45,
        //borderWidth: StyleSheet.hairlineWidth,
        //borderWidth: 3,
        //borderColor: '#d3e992',
        borderBottomLeftRadius: 15,
        position: 'absolute',
        width: 400,
        height: 800

    },
    view1:{
        flexDirection: 'row-reverse', 
        justifyContent: 'space-evently',
        direction: 'rtl', 
        alignSelf: 'flex-end',
        width: 130,
        bottom: 30
    },
    titulo:{
        color: '#4771b3', 
        //textShadowColor:'#d3e992',
        //textShadowOffset:{width: 5, height: 5},
        //textShadowRadius:10,
        left: 25, 
        top: 30, 
        fontSize: 24, 
        fontWeight: 'bold', 
        width: 200
    },
    botaoAdicionar:{
        alignSelf: 'flex-end',
        top: 550,
        right: 70,
    },
    flatList:{
        bottom: 37,
        height: 500
    },
    viewList:{
        width: 345,
        height: 'auto',
        left: 15,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: StyleSheet.hairlineWidth,
        borderWidth: 2,
        borderColor: '#ffe3a0',
        borderRadius: 5,

    },
    textList:{
        fontSize: 20,
        color: '#4771b3',
    },
    menu:{
        width: 45, 
        position:'absolute', 
        flexDirection: 'column', 
        direction: 'ltr', 
        alignItems:'flex-end',
        
    },
    menuBranco:{
        width: 30,
        height: 160,
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        
    },
    menuVerde:{
        width: 30,
        height: 160,
        backgroundColor: '#d3e992',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    menuLaranja:{
        width: 30,
        height: 160,
        backgroundColor: '#ffe3a0',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    menuVermelho:{
        width: 30,
        height: 160,
        backgroundColor: '#ffafaf',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    }
});      