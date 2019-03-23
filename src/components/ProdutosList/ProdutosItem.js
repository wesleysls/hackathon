import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight,Image} from 'react-native';

export default class ProdutosItem extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            foto:null
        }

        this.onclick = this.onclick.bind(this);
        this.state.foto ={uri:this.props.data.foto};
    }

    onclick(){
        this.props.onPress(this.props.data);
    }

    render(){
        return(
            <TouchableHighlight onPress = {this.onclick}>
            <View style={ProdutoStyles.area}>
                <View style={ProdutoStyles.foto}>
                    <Image style={ProdutoStyles.fotoItem} source = {this.state.foto}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <View style={ProdutoStyles.areaTexto}>
                        <Text style={ProdutoStyles.preco}>R${this.props.data.preco}</Text>
                        <Text style={ProdutoStyles.descricao}>{this.props.data.nome}</Text>
                    </View>
                </View>    
            </View>
            </TouchableHighlight>
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