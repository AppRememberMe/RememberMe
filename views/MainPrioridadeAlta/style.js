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
        marginBottom: 10,
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        //backgroundColor: '#fce9d2',
        borderWidth: StyleSheet.hairlineWidth,
        borderWidth: 2,
        borderLeftColor: '#fc9797',
        borderRightColor: '#fc9797',
        borderColor: '#fff',
        borderRadius: 5,

    },
    textList:{
        fontSize: 20,
        color: '#4771b3',
    },
    modal:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modal1View:{
        borderRadius: 30,
        padding: 20,
        width: 300,
        height: 210,
        left: 20,
        alignItems: 'center',
        backgroundColor: '#ffafaf',
        shadowColor: "#4458be",
        shadowOffset: {
        width: 10,
        height: 10
        },
        shadowOpacity: 0.5,
        shadowRadius: 20,

    },
    textModal1:{
        color: '#4458be', 
        fontSize: 20, 
        fontWeight: 'bold', 
        width: 300,
        left: 90,
        bottom: 30,
        
    },
    botaoAdicionarModal:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#4458be',
        width: 250,
        padding: 6,
        height: 50,
        borderRadius: 10,

    },
    textBotaoAdicionarModal:{
        color:'#fff', 
        fontSize:16, 
        padding: 5,
        textAlign: 'center', 
        fontWeight: 'bold',
        letterSpacing: 2
    },
    inputModal: {
        width: 250,
        height: 50,
        padding: 6,
        bottom: 10,
        borderRadius: 5,
        fontSize: 12,
        color: '#4458be',
        backgroundColor: '#fff',
        textAlign: 'center', 
        borderColor: "#ffafaf",
        borderWidth: 1,
    },
    modal2View:{
        borderRadius: 30,
        padding: 20,
        width: 300,
        height: 200,
        left: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: "#4458be",
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 0.5,
        shadowRadius: 15,

    },
    textModal2:{
        color: '#4771b3', 
        fontSize: 20, 
        fontWeight: 'bold', 
        width: 300,
        left: 115,
        bottom: 30
        
    },
    botaoRenomear: {
        backgroundColor: '#ffe3a0',
        width: 250,
        borderRadius: 10,
        padding: 6,
        height: 40,
    },
    textRenomear: {
        color:'#508ebe', 
        fontSize:16, 
        textAlign: 'center', 
        letterSpacing: 2
    },
    botaoApagar: {
        backgroundColor: '#ffafaf',
        width: 250,
        borderRadius: 10,
        padding: 6,
        height: 40,
        top: 5
    },
    textApagar: {
        color:'#508ebe', 
        fontSize:16, 
        textAlign: 'center', 
        letterSpacing: 2
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