import React,{useState} from "react";
import { View, Text, TouchableOpacity, FlatList, Modal, TextInput} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconeFechar from "../../components/iconeFechar";
import IconeOpcoes from "../../components/iconeOpcoes";
import BarraProgresso from "../../components/barraProgresso";
import BotaoAdicionar from "../../components/botaoAdicionar";
import style from  './style';



export default function MainPrioridadeMedia({navigation}){
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const DATA = [
        {tarefa: 'Tarefa 10'},
        {tarefa: 'Tarefa 11'},
        {tarefa: 'Tarefa 12'},
        {tarefa: 'Tarefa 13'},
        {tarefa: 'Tarefa 14'},
    ]
return(
        <SafeAreaView style={style.container}>
            <LinearGradient colors={['#4458be', '#65ebbe']} style={style.background}/>

            <View>      
                <View style={style.view}>

                    <Text style={style.titulo}>Prioridade Média</Text>

                    <View style={style.view1}> 
                        

                        <TouchableOpacity style={{left:30}}onPress={() => navigation.navigate('teste')}>
                            <IconeOpcoes></IconeOpcoes>
                        </TouchableOpacity>
                    </View>

                    <BarraProgresso color={'#ffe3a0'} calculo={1/5}></BarraProgresso>

                    {/* Modal Adiconar nova tarefa */}
                    <Modal animationType="fade" transparent={true} visible={modal1}>
                        <View style={style.modal}>
                            <View style={style.modal1View}>

                                <TouchableOpacity onPress={() => setModal1(false)} style={{ right:110}}>    
                                    <IconeFechar color={"#4458be"} ></IconeFechar>
                                </TouchableOpacity>
                        
                                <Text style={style.textModal1}>Nova tarefa</Text>

                                <TextInput  style={style.inputModal}/>
                                <View>
                                    <TouchableOpacity onPress={() => setModal1(false)} style={style.botaoAdicionarModal}>
                                        <Text style={style.textBotaoAdicionarModal}>Adicionar</Text>
                                    </TouchableOpacity>
                                    
                                </View> 
                            </View>
                        </View>
                    </Modal>
                    
                    {/* Modal quando pressiona uma tarefa */}

                    <Modal animationType="fade" transparent={true} visible={modal2}>
                        <View style={style.modal}>
                            <View style={style.modal2View}>
                                <TouchableOpacity onPress={() => setModal2(false)} style={{ right:110}}>    
                                    <IconeFechar color={"#4771b3"} ></IconeFechar>
                                </TouchableOpacity>
                                <Text style={style.textModal2}>Tarefa</Text>

                                <TouchableOpacity style={style.botaoRenomear}>
                                    <Text style={style.textRenomear}>Renomear</Text>
                                </TouchableOpacity>

                                 <TouchableOpacity style={style.botaoApagar}>
                                    <Text style={style.textApagar}>Apagar</Text>

                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    <TouchableOpacity style={style.botaoAdicionar} onPress={() => setModal1(true)} >
                        <BotaoAdicionar></BotaoAdicionar>
                    </TouchableOpacity>

                    <View style={style.flatList} >
                        <FlatList
                        data={DATA}
                        renderItem={({item}) => (
                            <TouchableOpacity style={style.viewList} onLongPress={() => setModal2(true)}>
                                <Text style={style.textList} icon={'start'}>{item.tarefa} </Text>
                            </TouchableOpacity> 
                        )}
                    />
                    </View>
                </View>

                <View style={style.menu}>
                    <TouchableOpacity onPress={()=> navigation.navigate('MainPrincipal')}>
                        <View style={style.menuBranco}></View>
                    </TouchableOpacity>  
                                      
                    <TouchableOpacity  onPress={() => navigation.navigate('MainPrioridadeBaixa')}>
                        <View style={style.menuVerde}></View>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={() => navigation.navigate('MainPrioridadeMedia')}>
                        <View style={style.menuLaranja} ></View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('MainPrioridadeAlta')}>
                        <View style={style.menuVermelho} ></View>
                    </TouchableOpacity>
                </View>
            </View>
            
        </SafeAreaView>
    );
}
