const initialState = {
	name:'',
	telefone:'',
	estado:'',
	cidade:'',
	bairro:'',
	rua:'',
	numero:'',
	complemento:'',
	email:'',
	chave:'',
	password:'',
	confirmPassword:'',
	uid:'',
	status:0,
	user:[],
	restaurante:'',
	chaves:[]
};

const AuthReducer = (state = initialState, action) => {

	
    if(action.type == 'setUser') {
		return { ...state, user:action.payload.user};
	}

	if(action.type == 'setRestaurante') {
		return { ...state, restaurante:action.payload.restaurante};
	}

	if(action.type == 'setChaves') {
		return { ...state, chaves:action.payload.chaves};
	}

	if(action.type == 'changeStatus') {
		return { ...state, status:action.payload.status};
	}

	if(action.type == 'changeEmail'){
		return {...state,email:action.payload.email};
	}

	if(action.type == 'changeChave'){
		return {...state,chave:action.payload.chave};
	}

	if(action.type == 'changePassword'){
		return {...state,password:action.payload.pass};
	}
	if(action.type == 'changeConfirmPassword'){
		return {...state,confirmPassword:action.payload.repass};
	}
	if(action.type == 'changeName'){
		return {...state,name:action.payload.name};
	}
	if(action.type == 'changeTelefone'){
		return {...state,telefone:action.payload.telefone};
	}
	if(action.type == 'changeEstado'){
		return {...state,estado:action.payload.estado};
	}
	if(action.type == 'changeCidade'){
		return {...state,cidade:action.payload.cidade};
	}
	if(action.type == 'changeBairro'){
		return {...state,bairro:action.payload.bairro};
	}
	if(action.type == 'changeRua'){
		return {...state,rua:action.payload.rua};
	}
	if(action.type == 'changeNumero'){
		return {...state,numero:action.payload.numero};
	}
	if(action.type == 'changeComplemento'){
		return {...state,complemento:action.payload.complemento};
	}
	if(action.type == 'changeUid'){
		return {...state,status:1,uid:action.payload.uid};
	}

	return state;

};

export default AuthReducer;