import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight,Image} from 'react-native';

export default class PedidoItem extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            foto:'' //require('../../assets/images/foto.png'),
        }

        this.onclick = this.onclick.bind(this);
        //this.state.foto ={uri:this.props.data.foto};
    }

    onclick(){
        this.props.onPress(this.props.data);
    }

    componentDidMount() {
    }

    render(){
        return(
            <View style={ProdutoStyles.area}>
            <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'#eee',borderTopWidth:1,borderLeftWidth:1}}>
                <View style = {{flexDirection:'column',width:150,height:'100%'}}>
                    <View style={ProdutoStyles.foto}>
                        <Image style={ProdutoStyles.fotoItem} source = {this.state.foto}/>
                    </View>
                </View>
                <View style={{width:180,height:124,justifyContent:'flex-end'}}>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                        <View style={ProdutoStyles.areaTexto}>
                            <Text style={ProdutoStyles.preco}>R${this.props.data.preco}</Text>
                            <Text style={ProdutoStyles.descricao}>{this.props.data.nome}</Text>
                        </View>
                    </View>
                    <View style={{height:50,justifyContent:'center',flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:'white', marginLeft:10}}>
                        <Text style={{fontSize:18,color:'black'}}>Quantidade: {this.props.data.quantidade}</Text>
                    </View>
                </View> 
            </View>
                <Text style={{textAlign:'justify',fontSize:12}}>Observações: {this.props.data.obs}</Text>
            </View>
            
        );
    }
}   
const ProdutoStyles = StyleSheet.create({
    area:{
        marginTop:10,
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:10,
        width:340,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        backgroundColor:'white',
        borderRadius:5,
    },
    preco:{
        fontWeight:'100',
        fontSize:20,
        marginBottom:10,
        marginRight:20,
        marginLeft:10,
        color:'black',
    },
    descricao:{
        fontSize:13,
        color:'gray',
         marginLeft:10  
    },
    foto:{
        width:150,
        height:124,
        borderColor:'#eee',
        borderRightWidth:1,
        backgroundColor:'#eee'
    },
    fotoItem:{
        width:150,
        height:124
    },
    areaTexto:{
        width:170,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    }
    
});