import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,TextInput,Keyboard,ScrollView,Picker,Image,TouchableHighlight,StatusBar} from 'react-native';
import { connect } from 'react-redux';
import { getChaves,checkLogin,changeEmail,changeChave,changePassword,changeConfirmPassword,changeName,changeTelefone,changeEstado,changeCidade,changeBairro,changeRua,changeNumero,changeComplemento,SignUpAction} from '../actions/AuthActions';



export class SignUp extends Component {

	static navigationOptions = {
		title:'Cadastrar',
		headerStyle:{
            backgroundColor:'#2a2169',
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

        this.props.getChaves();
		this.changeSelects = this.changeSelects.bind(this);
		this.verivicarChave = this.verivicarChave.bind(this);
	}

	componentDidUpdate(){
        if (this.props.status == 1){
        	Keyboard.dismiss();
        	this.props.navigation.navigate('Preload');
        }
    }

    verivicarChave(chave){
    	this.props.changeChave(chave);
    	this.props.chaves.forEach((childItem)=>{
            if(childItem.chave == chave){
                let s = this.state;
                s.textConfirm = '*Chave encontrada!';
                s.confirmCor= 'green';
                this.setState(s); 
            }else{
                let s = this.state;
                s.textConfirm = '*Chave  não encontrada!';
                s.confirmCor = 'red';
                this.setState(s);
            }   	
    	})
    }

    changeSelects(){
    	if (this.props.name != '' && this.props.chave != '' && this.props.telefone != '' && this.props.estado != '' && this.props.cidade != '' && this.props.bairro != '' && this.props.rua != '' && this.props.numero != '' &&this.props.complemento != '' && this.props.email != '' && this.props.password != '' && this.props.confirmPassword != ''){
    	    if(this.props.password == this.props.confirmPassword){
    	    	if(this.state.textConfirm == '*Chave encontrada!'){
    	            this.props.SignUpAction(
    	 	            this.props.name, 
    	 	            this.props.telefone, 
    	 	            this.props.estado, 
    	 	            this.props.cidade, 
    	 	            this.props.bairro, 
    	 	            this.props.rua, 
    	 	            this.props.numero, 
    	 	            this.props.complemento, 
    	     	        this.props.email, 
    	 	            this.props.password,
    	 	            this.props.chave
    	 	        );
    	 	    }else{
    	 	    	alert('Entre com a chave correta do seu restaurante!');
    	 	    }
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
			        
				    
				    <Text style={styles.texto2}>Informações do Restaurante</Text>
				    <TextInput style={styles.input} placeholder={'Nome do restaurante'} underlineColorAndroid={'transparent'} onChangeText={this.props.changeName}/>
				    <TextInput style={styles.input} keyboardType ='phone-pad' placeholder={'Telefone do restaurante'} underlineColorAndroid={'transparent'} onChangeText={this.props.changeTelefone}/>
				    
				    <Text style={styles.texto2}>Endereço do restaurante</Text>
				    <TextInput  placeholder={'Digite seu estado'} underlineColorAndroid={'transparent'} style={styles.input} onChangeText={this.props.changeEstado}/>
				    <TextInput  placeholder={'Digite sua cidade'} underlineColorAndroid={'transparent'} style={styles.input} onChangeText={this.props.changeCidade}/>
				    <TextInput  placeholder={'Digite seu bairro'} underlineColorAndroid={'transparent'} style={styles.input} onChangeText={this.props.changeBairro}/>
				    <TextInput  placeholder={'Digite sua rua'} underlineColorAndroid={'transparent'} style={styles.input} onChangeText={this.props.changeRua}/>
				    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
				        <TextInput  placeholder={'Número'} underlineColorAndroid={'transparent'} style={styles.input2} onChangeText={this.props.changeNumero}/>
				        <TextInput  placeholder={'Complemento'} underlineColorAndroid={'transparent'} style={styles.input3} onChangeText={this.props.changeComplemento}/>
				    </View>

				    <Text style={styles.texto2}>Login</Text>
			    	<TextInput style={styles.input} keyboardType ='email-address' placeholder={'Digite seu email'} underlineColorAndroid={'transparent'} onChangeText={this.props.changeEmail}/>
			    	<TextInput style={styles.input} placeholder={'chave do restaurante'} underlineColorAndroid={'transparent'} onChangeText={this.verivicarChave}/>
			    	<Text style={[{fontSize:11},{color:this.state.confirmCor}]}>{this.state.textConfirm}</Text>
				    <TextInput secureTextEntry = {true} placeholder={'Digite sua senha'} underlineColorAndroid={'transparent'} style={styles.input} onChangeText={this.props.changePassword}/>
				    <TextInput secureTextEntry = {true} placeholder={'Digite sua senha novamente'} underlineColorAndroid={'transparent'} style={styles.input} onChangeText={this.props.changeConfirmPassword}/>
				    
				   
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
		status:state.auth.status,
		name:state.auth.name,
		telefone:state.auth.telefone,
		estado:state.auth.estado,
		cidade:state.auth.cidade,
		bairro:state.auth.bairro,
		rua:state.auth.rua,
		numero:state.auth.numero,
		complemento:state.auth.complemento,
		email:state.auth.email,
		password:state.auth.password,
		confirmPassword:state.auth.confirmPassword,
		chave:state.auth.chave,
		chaves:state.auth.chaves,
	};
};

const SignUpConnect = connect(mapStateToProps, { getChaves,checkLogin,changeChave,changeEmail,changePassword,changeConfirmPassword,changeName,changeTelefone,changeEstado,changeCidade,changeBairro,changeRua,changeNumero,changeComplemento,SignUpAction })(SignUp);
export default SignUpConnect;
















