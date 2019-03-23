import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight,Image} from 'react-native';

export default class ProdutosPedidos extends Component{
    
    constructor(props){
        super(props);
        this.state ={
        }
    }

    onclick(){
       
    }

    render(){
        return(
            <View style={ProdutoStyles.area}>
                <Text>id: {this.props.data.id}</Text>
                <Text>observacoes: {this.props.data.observacoes}</Text> 
                <Text>quantidade: {this.props.data.quantidade}</Text> 
                <Text>tipo: {this.props.data.tipo}</Text> 
            </View>
        );
    }
}   
const ProdutoStyles = StyleSheet.create({
    area:{
        flexDirection:'column',
        marginTop:10,
        paddingTop:8,
        marginRight:8,
        width:170,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#EEE'
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
        width:150,
        height:120,
    },
    fotoItem:{
        width:150,
        height:120
    },
    areaTexto:{
        width:150,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    }
    
});