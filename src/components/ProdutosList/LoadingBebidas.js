import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight,Image,ActivityIndicator} from 'react-native';

export default class LoadingBebidas extends Component{
    
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
        marginTop:10,
        paddingTop:8,
        marginRight:8,
        width:348,
        height:185,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#EEE'
    },
    
});