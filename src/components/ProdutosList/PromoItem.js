import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight,Image} from 'react-native';

export default class PromoItem extends Component{
    
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
        paddingBottom:8,
        marginRight:8,
        width:170,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#EEE'
    },
    foto:{
        width:150,
        height:120,
    },
    fotoItem:{
        width:150,
        height:120
    }
});