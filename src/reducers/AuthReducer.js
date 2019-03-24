const initialState = {
	name:'',
	email:'',
	sexo:'',
	data_nasc:'',
	password:'',
	confirmPassword:'',
	uid:'',
	status:0,
	user:[],
	config:''
};

const AuthReducer = (state = initialState, action) => {

	
    if(action.type == 'setUser') {
		return { ...state, user:action.payload.user};
	}

	if(action.type == 'setConfig') {
		return { ...state, config:action.payload.config};
	}

	if(action.type == 'changeStatus') {
		return { ...state, status:action.payload.status};
	}

	if(action.type == 'changeEmail'){
		return {...state,email:action.payload.email};
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

	if(action.type == 'changeSexo'){
		return {...state,sexo:action.payload.sexo};
	}

	if(action.type == 'changeData_nasc'){
		return {...state,data_nasc:action.payload.data_nasc};
	}

	if(action.type == 'changeUid'){
		return {...state,status:1,uid:action.payload.uid};
	}

	return state;

};

export default AuthReducer;