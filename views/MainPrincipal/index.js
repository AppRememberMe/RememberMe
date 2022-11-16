import React,{useState, useRef} from "react";
import { View, Text, TouchableOpacity, FlatList, Modal, TextInput,} from "react-native";
import { RadioButton  } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarraProgresso from "../../components/barraProgresso";
import BotaoAdicionar from "../../components/botaoAdicionar";
import { SimpleLineIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import style from  './style';
import moment from 'moment';
import 'moment/locale/pt-br';

moment().format();
moment.locale('pt-br');

var data1 = moment().format('MMM') + ', ' + moment().format('YYYY');   
var data2 = moment().format('dddd') + ', ' + moment().format('DD');  

export default function MainPrincipal({navigation}){
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modalOpcoes, setModalOpcoes] = useState(false);
    const [checked, setChecked] = useState('');

  const DATA = [
    {tarefa: 'Tarefa 1'},
    {tarefa: 'Tarefa 2'},
    {tarefa: 'Tarefa 3'},
    {tarefa: 'Tarefa 4'},
    {tarefa: 'Tarefa 5'},
    {tarefa: 'Tarefa 6'},
    {tarefa: 'Tarefa 7'},
    {tarefa: 'Tarefa 8'},
    {tarefa: 'Tarefa 9'},
    {tarefa: 'Tarefa 10'},
    {tarefa: 'Tarefa 11'},
    {tarefa: 'Tarefa 12'},
    {tarefa: 'Tarefa 13'},
    {tarefa: 'Tarefa 14'},
    {tarefa: 'Tarefa 15'},
    {tarefa: 'Tarefa 16'},
    {tarefa: 'Tarefa 17'},
    {tarefa: 'Tarefa 18'},
    {tarefa: 'Tarefa 19'},
    {tarefa: 'Tarefa 20'},

]


return(
        <SafeAreaView style={style.container}>
            <LinearGradient colors={['#4458be', '#65ebbe']} style={style.background}/>

            <View>      
                <View style={style.view}>
                    <Text style={style.data1}>{data1[0].toUpperCase() + data1.substr(1)}</Text>
                    <Text style={style.data2}>{data2[0].toUpperCase() + data2.substr(1)}</Text>

                    <View style={style.view1} > 
                        <TouchableOpacity style={{left:40,top:10}} onPress={() => setModalOpcoes(true)}>
                            <SimpleLineIcons name="options-vertical" size={34} color="#4771b3" />
                        </TouchableOpacity>
                    </View>

                    {/* Modal de Opções -- onDimiss*/ }
                    <Modal animationType="fade" transparent={true} visible={modalOpcoes}>
                        
                        <View style={style.modalOpcoesView}>
                            <TouchableOpacity onPress={() => setModalOpcoes(false)} style={{ width:35}}>    
                                <Ionicons name="md-close-outline" size={30} color={'white'} />    
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => setModalOpcoes(false)} style={{ width:35, top:20 }}>    
                                <Ionicons name="person-circle" size={32} color="white" />                            
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setModalOpcoes(false)} style={{ width:35, top:45 }}>    
                                <MaterialIcons name="delete" size={30} color="white" />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ width:35, top:80 }}>    
                                <SimpleLineIcons name="logout" size={24} color="white" />
                            </TouchableOpacity>
                            {/* <TouchableOpacity onPress={() => setModal1(false)} style={style.botaoAdicionarModal}>
                                <Text style={style.textBotaoAdicionarModal}>Adicionar</Text>
                            </TouchableOpacity> */}
                        </View>
                    </Modal>
                    
                    <BarraProgresso color={'#4771b3'}></BarraProgresso>

                    {/* Modal Adiconar nova tarefa */}
                    <Modal animationType="fade" transparent={true} visible={modal1} >
                        <View style={style.modal}>
                            <View style={style.modal1View}>
                                <TouchableOpacity onPress={() => setModal1(false)} style={{ width:25 }}>    
                                    <Ionicons name="md-close-outline" size={30} color={'white'} />    
                                </TouchableOpacity>

                                <Text style={style.textModal1}>Nova tarefa</Text>
                                <TextInput  style={style.inputModal}
                                    placeholder='Nome' 
                                    placeholderTextColor="#fff"/>

                                <RadioButton.Group  onValueChange={value => setChecked(value)} value={checked} >
                                    <RadioButton.Item label="Prioridade alta" value="1" labelStyle={{color:"#ffafaf", fontWeight:'500', right:50}} position={"leading"} mode={'android'} color={"white"} uncheckedColor={"white"}/>
                                    <RadioButton.Item label="Prioridade média" value="2" labelStyle={{color:"#ffe3a0", fontWeight:'500', right:30}} position={"leading"} mode={'android'} color={"white"} uncheckedColor={"white"}/>
                                    <RadioButton.Item label="Prioridade baixa" value="3" labelStyle={{color:"#d3e992", fontWeight:'500', right:40}} position={"leading"} mode={'android'} color={"white"} uncheckedColor={"white"}/>
                                </RadioButton.Group>
                                    
                                
                                <TouchableOpacity onPress={() => setModal1(false)} style={style.botaoAdicionarModal}>
                                    <Text style={style.textBotaoAdicionarModal}>Adicionar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    {/* Modal quando pressiona uma tarefa */}

                    <Modal animationType="fade" transparent={true} visible={modal2}>
                        <View style={style.modal}>
                            <View style={style.modal2View}>
                                <TouchableOpacity onPress={() => setModal2(false)} style={{ right:110}}>    
                                    <Ionicons name="md-close-outline" size={30} color={'#4771b3'} />    

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
                    <View style={style.menuBranco}></View>
                    <TouchableOpacity  onPress={() => navigation.navigate('MainPrioridadeBaixa')}>
                        <View style={style.menuVerde}></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MainPrioridadeMedia')}>
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
