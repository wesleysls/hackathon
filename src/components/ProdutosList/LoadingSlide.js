import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight,Image,ActivityIndicator} from 'react-native';

export default class LoadingSlide extends Component{
    
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
        flexDirection:'column',
        width:'100%',
        height:148,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    
});