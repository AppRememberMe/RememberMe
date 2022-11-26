import React,{useState} from "react";
import { View, Text, TouchableOpacity, FlatList, Modal, TextInput} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import BarraProgresso from "../../components/barraProgresso";
import BotaoAdicionar from "../../components/botaoAdicionar";
import { SimpleLineIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import style from  './style';



export default function MainPrioridadeMedia({navigation}){
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modalApagar, setModalApagar] = useState(false);
    const [nomeTarefa, setNomeTarefa] = useState(null);
    const[user, setUser]= useState(null);

    //criar tarefa
    async function tarefa(){
        let res = await AsyncStorage.getItem('userData');
        let res1 = JSON.parse(res);
        setUser(res1._id);

        let response = await fetch('http://192.168.0.15:3000/tarefas/create', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            nomeTarefa: nomeTarefa,
            prioridade: "media",
        })
        });
        setModal1(false);
    }
    //deletar todas as tarefas de prioridade baixa
    async function deletarTarefas(){
        let res = await AsyncStorage.getItem('userData');
        let res1 = JSON.parse(res);
        setUser(res1._id);
        
        let response = await fetch('http://192.168.0.15:3000/tarefas/deletarTudoPrioridade', {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            prioridade: "media"
        })
        }); 
        setModalApagar(false)
    }
    function modal(){
        setModal2(false);
        setModal3(true);
      }
return(
        <SafeAreaView style={style.container}>
            <LinearGradient colors={['#4458be', '#65ebbe']} style={style.background}/>

            <View>      
                <View style={style.view}>

                    <Text style={style.titulo}>Prioridade Média</Text>

                    <View style={style.view1} > 
                        <TouchableOpacity onPress={() => setModalApagar(true)} >    
                                <MaterialIcons name="delete" size={32} color="#4771b3" />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{right: 30, top:2}}>    
                                <SimpleLineIcons name="logout" size={26} color="#4771b3" />
                            </TouchableOpacity>
                    </View>

                    {/* Modal Apagar */ }
                    <Modal animationType="fade" transparent={true} visible={modalApagar}>
                        <View style={style.modal}>
                            <View style={style.modalApagar}>
                                <TouchableOpacity onPress={() => setModalApagar(false)} style={{ width:25}}>    
                                    <Ionicons name="md-close-outline" size={30} color={'#fff'} />    
                                </TouchableOpacity>
                                <Text style={style.texto}>Deseja apagar todas as tarefas?</Text>
                            <View style={style.botoes}>
                                <TouchableOpacity onPress={() => deletarTarefas()} style={style.botaoSim}> 
                                    <Text style={style.textBotao}>Sim</Text>   
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => setModalApagar(false)} style={style.botaoNao}> 
                                    <Text style={style.textBotao}>Não</Text>   
                                </TouchableOpacity>
                            </View>
                            </View>
                        </View>
                    </Modal>

                    <BarraProgresso color={'#ffe3a0'} ></BarraProgresso>

                    {/* Modal Adiconar nova tarefa */}
                    <Modal animationType="fade" transparent={true} visible={modal1}>
                        <View style={style.modal}>
                            <View style={style.modal1View}>

                                <TouchableOpacity onPress={() => setModal1(false)} style={{ right:110}}>    
                                    <Ionicons name="md-close-outline" size={30} color={'#4458be'} />
                                </TouchableOpacity>
                        
                                <Text style={style.textModal1}>Nova tarefa</Text>

                                <TextInput  style={style.inputModal} onChangeText={(text) => setNomeTarefa(text)}/>
                    
                                <TouchableOpacity onPress={() => tarefa()} style={style.botaoAdicionarModal}>
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

                                <TouchableOpacity style={style.botaoRenomear} onPress={() => modal()}>
                                    <Text style={style.textRenomear}>Renomear</Text>
                                </TouchableOpacity>

                                 <TouchableOpacity style={style.botaoApagar}>
                                    <Text style={style.textApagar}>Apagar</Text>

                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    {/* Modal renomear uma tarefa */}

                    <Modal animationType="fade" transparent={true} visible={modal3}>
                        <View style={style.modal}>
                            <View style={style.modal2View}>
                                <TouchableOpacity onPress={() => setModal3(false)} style={{ right:110}}>    
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
