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
    data1:{
        color: '#4771b3',
        left: 25, 
        top: 20, 
        fontSize: 16, 
        width: 200 
    },
    data2:{
        color: '#4771b3', 
        left: 25, 
        top: 20, 
        fontSize: 22, 
        fontWeight: 'bold', 
        width: 300
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
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f7f5f5',
        borderRadius: 5,
        borderWidth: 2,
       
    },
    textList:{
        fontSize: 20,
        color: '#4771b3'
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
        height: 300,
        left: 20,
        backgroundColor: '#4458be',
        shadowColor: "#4458be",
        shadowOffset: {
        width: 10,
        height: 10
        },
        shadowOpacity: 0.5,
        shadowRadius: 20,

    },
    textModal1:{
        color: '#fff', 
        fontSize: 20, 
        fontWeight: 'bold', 
        width: 300,
        left: 70,
        bottom: 30
        
    },
    inputModal: {
        width: 250,
        height: 50,
        padding: 6,
        borderRadius: 5,
        fontSize: 12,
        letterSpacing: 2,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center', 
        borderColor: "#fff",
        borderWidth: StyleSheet.hairlineWidth,

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