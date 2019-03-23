import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight,Image,ActivityIndicator} from 'react-native';

export default class LoadingHistorico extends Component{
    
    constructor(props){
        super(props);
        this.state ={
           
        }
    }

    render(){
        if(this.props.visible == true){
            return(
                <View style={ProdutoStyles.area}>
                     <ActivityIndicator size="large"/>
                </View>
            );
        }
        return(
            <View>
                 
            </View>
        );
    }
}   
const ProdutoStyles = StyleSheet.create({
    area:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    
});