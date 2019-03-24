import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,TextInput,Keyboard,ScrollView,Picker,Image,TouchableHighlight,StatusBar} from 'react-native';
import { connect } from 'react-redux';
import {changeEmail,changePassword,changeConfirmPassword,changeName,changeSexo,changeData_nasc,SignUpAction_user1} from '../actions/AuthActions';



export class SignUp_Morador extends Component {

	static navigationOptions = {
		title:'Cadastrar',
		headerStyle:{
            backgroundColor:'white',
            height:50,
	    },
	}

	constructor(props) {
		super(props);
		this.state = {
			confirmPassword:'',
			textConfirm:'',
			confirmCor:'red'
		};
		this.changeSelects = this.changeSelects.bind(this);
		this.posicao = this.posicao.bind(this);
	}

	componentDidUpdate(){
        if (this.props.status == 1){
        	Keyboard.dismiss();
        	this.props.navigation.navigate('Preload');
        }
    }

    componentDidMount() {
		this.posicao();
	}

    posicao(){
		navigator.geolocation.getCurrentPosition((data)=>{
            this.state.latitude = data.coords.latitude;
            this.state.longitude = data.coords.longitude;
		},()=>{
            alert("erro")
		});
	}

    changeSelects(){
    	if (this.props.name != '' && this.props.sexo != '' && this.props.data_nasc != '' && this.props.email != '' && this.props.password != '' && this.props.confirmPassword != ''){
    	    if(this.props.password == this.props.confirmPassword){
    	            this.props.SignUpAction_user1(
                        'indefinido',
                        'morador',
                        this.props.name,
                        this.props.email,
                        this.props.data_nasc,
                        this.props.sexo,
                        'indefinido',
                        this.state.longitude,
                        this.state.latitude,
                        this.props.password,
                        'indefinido'
    	 	        );
    	    }else{
    	    	alert("senhas não conferem!");
    	    }
    	}else{
    		alert("Preencha todos os campos!");
    	}
    	 	
    }

	render() {
		return (
			<ScrollView>
			    <View style={styles.container}>
			        <StatusBar backgroundColor = 'black'/>
			       
				    <TextInput style={styles.input} placeholder={'NOME COMPLETO'} underlineColorAndroid={'transparent'} onChangeText={this.props.changeName}/>
				    <TextInput style={styles.input} keyboardType ='email-address' placeholder={'E-MAIL'} underlineColorAndroid={'transparent'} onChangeText={this.props.changeEmail}/>
				    <TextInput secureTextEntry = {true} placeholder={'SENHA'} underlineColorAndroid={'transparent'} style={styles.input} onChangeText={this.props.changePassword}/>
				    <TextInput secureTextEntry = {true} placeholder={'CONFIRMAÇÃO DE SENHA'} underlineColorAndroid={'transparent'} style={styles.input} onChangeText={this.props.changeConfirmPassword}/>
				     <TextInput style={styles.input} placeholder={'DATA DE NASCIMENTO'} underlineColorAndroid={'transparent'} onChangeText={this.props.changeData_nasc}/>
				    <TextInput style={styles.input} placeholder={'SEXO'} underlineColorAndroid={'transparent'} onChangeText={this.props.changeSexo}/>
				   
				    <View style={{marginTop:20,marginBottom:20}}>
			           <TouchableHighlight style={styles.button} onPress={this.changeSelects}>
			            <View style ={styles.cadastrar}>
			                <Text style ={{color:'white',fontSize:16}}>Cadastrar</Text>
			            </View>    
			        </TouchableHighlight>
			        </View>
			    </View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'white'

	},
	input:{
		width:288,
		height:50,
		fontSize:16,
		margin:10,
		color:'black',
		paddingLeft:10,
		paddingRight:10,
		borderRadius:10,
		borderColor:'#2a2169',
		borderWidth:1,
		backgroundColor:'white'
	},
	input2:{
		width:80,
		height:50,
		fontSize:16,
		margin:10,
		color:'black',
		paddingLeft:10,
		paddingRight:10,
		borderRadius:10,
		borderColor:'#2a2169',
		borderWidth:1,
		backgroundColor:'white'
	},
	input3:{
		width:188,
		height:50,
		fontSize:16,
		margin:10,
		color:'black',
		paddingLeft:10,
		paddingRight:10,
		borderRadius:10,
		borderColor:'#2a2169',
		borderWidth:1,
		backgroundColor:'white'
	},
	texto:{
		fontSize:20,
		color:'white'
	},
	texto2:{
		fontSize:20,
		color:'#2a2169',
		marginTop:20,
		fontWeight:'100'
	},
	cadastrar:{
		width:150,
		height:40,
		backgroundColor:'white',
		borderRadius:10,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#2a2169',
	},
	logo:{
		marginTop:10,
		width:200,
		height:210,
	}
});

const mapStateToProps = (state) => {
	return {
		name:state.auth.name,
		telefone:state.auth.telefone,
		email:state.auth.email,
		password:state.auth.password,
		confirmPassword:state.auth.confirmPassword,
	    sexo:state.auth.sexo,
	    data_nasc:state.auth.data_nasc,
	};
};

export default connect(mapStateToProps, { changeEmail,changePassword,changeConfirmPassword,changeName,changeSexo,changeData_nasc,SignUpAction_user1})(SignUp_Morador);

















