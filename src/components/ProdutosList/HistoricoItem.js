import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight,Image} from 'react-native';

export default class EntregaItem extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            uri: require('../../assets/images/clipboard.png'),
            status:'#5baded',
            dadosComplementares1:'',
            dadosComplementares2:''
        }

        this.onclick = this.onclick.bind(this);
    }

    onclick(){
        this.props.onPress(this.props.data);
    }

    componentDidMount(){

        if(this.props.data.tipo == 'entrega'){
            this.setState({
                uri: require('../../assets/images/entrega.png'),
                dadosComplementares1:'Entregar as: ',
                dadosComplementares2:this.props.data.horaEntrega
            }); 
        }else{
           this.setState({
                dadosComplementares1:'Data da reserva: ',
                dadosComplementares2:this.props.data.data+' '+this.props.data.hora
            });  
        }

        switch(this.props.data.status){
            case'Cancelado':
                this.setState({
                    status:'#e73f42'
                }); 
                break;
            case'Enviando pedido':
                this.setState({
                    status:'orange'
                }); 
                break;
            case'Entregue':
                this.setState({
                    status:'#25f725'
                }); 
                break;
            case'Confirmado':
                this.setState({
                    status:'#25f725'
                }); 
                break;
            default:
                this.setState({
                    status:'#5baded'
                }); 
        }
    }

    render(){
        return(
            <View style={ProdutoStyles.area}>
                <View style = {{flexDirection:'row',justifyContent:'flex-start',width:'100%',height:'100%'}}>
                    <View style={ProdutoStyles.foto}>
                       <Image style={{width:50,height:50}} resizeMode={'stretch'} source={this.state.uri}/>
                    </View>
                    <View style={{flex:1}}>
                        <TouchableHighlight style={[{flex:1,flexDirection:'row',height:30,alignItems:'center',justifyContent:'flex-start', paddingLeft:20,paddingRight:10,borderRadius:2},{backgroundColor:this.state.status}]} onPress={this.onclick}>
                            <View style={{alignItems:'flex-end',flexDirection:'row'}}>
                                <Text style={{color:'#cccccc',fontSize:15}}>Status: </Text>
                                <Text style={{color:'white',fontSize:15}}>{this.props.data.status}</Text>
                            </View>
                        </TouchableHighlight>
                        <View style={{flexDirection:'column'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{color:'black'}}>Pedido: </Text>
                                <Text style={{color:'gray',fontSize:12}}>{this.props.data.data_pedido}</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{color:'black'}}>{this.state.dadosComplementares1}</Text>
                                <Text style={{color:'gray',fontSize:12}}>{this.state.dadosComplementares2}</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{color:'black'}}>Valor: </Text>
                                <Text style={{color:'gray',fontSize:12}}>R${this.props.data.valor.toFixed(2)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            
        );
    }
}   
const ProdutoStyles = StyleSheet.create({
    area:{
        flexDirection:'row',
        marginTop:10,
        padding:8,
        width:340,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        backgroundColor:'white',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#eee'
    },
    preco:{
        fontWeight:'100',
        fontSize:20,
        marginBottom:5,
        marginRight:20,
        color:'black',
    },
    descricao:{
        fontSize:13,
        color:'gray',   
        marginBottom:5,
    },
    foto:{
        width:50,
        height:70,
        marginRight:10,
        alignItems:'center',
        justifyContent:'center'
    },
    fotoItem:{
        width:150,
        height:124,
        borderWidth:1,
        borderColor:'#eee'
    },
    areaTexto:{
        width:120,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    }
    
});