import React,{useState, useEffect} from "react";
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
    const [modalApagar, setModalApagar] = useState(false);
    const [checked, setChecked] = useState('');
    const[nomeTarefa, setNomeTarefa]= useState(null);
    const[display, setDisplay]= useState('none');
    const[dados, setDados]= useState(null)

    useEffect(()=>{
        listarTarefa();
    });
    //criar tarefa
    async function tarefa(){
        let response = await fetch('http://192.168.0.15:3000/tarefas/create', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: "637ab9e7539000938bdd05b6",
            nomeTarefa: nomeTarefa,
            prioridade: checked,
        })
        });

        let json = await response.json();
        if(json == 'error'){
            setDisplay('flex');
            setTimeout(() => {
                setDisplay('none')
            },3000);
        }
        listarTarefa();
        setModal1(false);
    }

  // listar todas as tarefas
    async function listarTarefa(){
        let response = await fetch('http://192.168.0.15:3000/tarefas/listarTodas', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: "637ab9e7539000938bdd05b6",
        })
        });

        let json = await response.json();
        setDados(json);
    }
  //deletar todas as tarefas
  async function deletarTarefas(){

    let res = await fetch('http://192.168.0.15:3000/tarefas/deletarTudo', {
    method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: "637ab9e7539000938bdd05b6"
      })
    }); 
    listarTarefa();
    setModalApagar(false)
  }


return(
        <SafeAreaView style={style.container}>
            <LinearGradient colors={['#4458be', '#65ebbe']} style={style.background}/>

            <View>      
                <View style={style.view}>
                    <Text style={style.data1}>{data1[0].toUpperCase() + data1.substr(1)}</Text>
                    <Text style={style.data2}>{data2[0].toUpperCase() + data2.substr(1)}</Text>

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

                    <BarraProgresso color={'#4771b3'}></BarraProgresso>

                    {/* Modal Adiconar nova tarefa */}
                    <Modal animationType="fade" transparent={true} visible={modal1} >
                        <View style={style.modal}>
                            <View style={style.modal1View}>
                                <TouchableOpacity onPress={() => setModal1(false)} style={{ width:25 }}>    
                                    <Ionicons name="md-close-outline" size={30} color={'white'} />    
                                </TouchableOpacity>

                                <Text style={style.textModal1}>Nova tarefa</Text>
                                <TextInput  style={style.inputModal} placeholder='Nome' placeholderTextColor="#fff" onChangeText={(text) => setNomeTarefa(text)}/>

                                <RadioButton.Group  onValueChange={value => setChecked(value)} value={checked} >
                                    <RadioButton.Item label="Prioridade alta" value="alta" labelStyle={{color:"#ffafaf", fontWeight:'500', right:50}} position={"leading"} mode={'android'} color={"white"} uncheckedColor={"white"}/>
                                    <RadioButton.Item label="Prioridade média" value="media" labelStyle={{color:"#ffe3a0", fontWeight:'500', right:30}} position={"leading"} mode={'android'} color={"white"} uncheckedColor={"white"}/>
                                    <RadioButton.Item label="Prioridade baixa" value="baixa" labelStyle={{color:"#d3e992", fontWeight:'500', right:40}} position={"leading"} mode={'android'} color={"white"} uncheckedColor={"white"}/>
                                </RadioButton.Group>
                                    
                                
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
                        data={dados}
                        renderItem={({item}) => (
                            <TouchableOpacity style={style.viewList} onLongPress={() => setModal2(true)}>
                                <Text style={style.textList} icon={'start'}>{item.nomeTarefa} </Text>
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
