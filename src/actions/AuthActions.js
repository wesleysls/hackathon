import firebase from '../firebaseConnection';

export const SignOut = (uid) =>{
    firebase.auth().signOut();
    return{
    	type:'changeStatus',
    	payload:{
    		status:2
    	}
    };
};

export const forgotPassword = (email)=>{
    return(dispatch)=>{
        firebase.auth().sendPasswordResetEmail(email).then(function(user){
            alert("E-mail de recuperação de senha enviado!");
        }).catch(function(e){
            alert(e);
        })
    };
};

export const checkLogin = () => {

	return (dispatch) => {
        firebase.auth().onAuthStateChanged((user)=>{
             if(user) {
			dispatch({
				type:'changeUid',
				payload:{
					uid:user.uid
				}
			});
            
		} else {
			dispatch({
				type:'changeStatus',
				payload:{
					status:2
				}
			});
		}

        });

		let user = firebase.auth().currentUser;

	}

};


export const SignUpAction_user1 =(salvo,tipo,name,email,data_nasc,sexo,criticidade,longitude,latitude,password,token)=> {
    return(dispatch)=>{
    	firebase.auth().createUserWithEmailAndPassword(email,password)
    	.then((user)=>{
             let uid = firebase.auth().currentUser.uid;
             
             firebase.database().ref('usuario_1').child(uid).set({
             	salvo:salvo,
                tipo:tipo,
                name:name,
                email:email,
                data_nasc:data_nasc,
                sexo:sexo,
                criticidade:criticidade,
                longitude:longitude,
                latitude:latitude,
                token:token
             });

             dispatch({
             	type:'changeUid',
             	payload:{
             		uid:uid
             	}
             });
    	})
    	.catch((error)=>{   
    		switch(error.code){
    			case 'auth/email-already-in-use':
    			    alert("Email já utilizado!");
    			break;
    			case 'auth/invalid-email':
    			    alert("email invalido!");
    			break;
    			case 'auth/operation-not-allowed':
    			    alert("tente novamente mais tarde!");
    			break;
    			case 'auth/weak-password':
    			    alert("Digite uma senha melhor!");
    			break;
    		}

    	});
    }
};

export const SignUpAction_user2 =(tipo,name,cargo,email,sexo,data_nasc,password,token)=> {
    alert(tipo)
    return(dispatch)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((user)=>{
             let uid = firebase.auth().currentUser.uid;
             
             firebase.database().ref('usuario_2').child(uid).set({
                tipo:tipo,
                name:name,
                email:email,
                data_nasc:data_nasc,
                sexo:sexo,
                cargo:cargo,
                token:token
             });

             dispatch({
                type:'changeUid',
                payload:{
                    uid:uid
                }
             });
        })
        .catch((error)=>{   
            switch(error.code){
                case 'auth/email-already-in-use':
                    alert("Email já utilizado!");
                break;
                case 'auth/invalid-email':
                    alert("email invalido!");
                break;
                case 'auth/operation-not-allowed':
                    alert("tente novamente mais tarde!");
                break;
                case 'auth/weak-password':
                    alert("Digite uma senha melhor!");
                break;
            }

        });
    }
};

export const  getUser = (uid,callback)=>{
    return(dispatch) => {
        firebase.database().ref('Adms').on('value',(snapshot)=>{
             let usuario = [];
             snapshot.forEach((childItem)=>{
                if(childItem.key == uid){
                    usuario = [  
                        childItem.val().name,
                        childItem.val().telefone,
                        childItem.val().estado,
                        childItem.val().cidade,
                        childItem.val().bairro,
                        childItem.val().rua,
                        childItem.val().numero,
                        childItem.val().complemento,
                        childItem.val().email,
                        childItem.val().chave,
                    ];
                }
             }); 

             callback(usuario);

             dispatch({
                type:'setUser',
                payload:{
                    user:usuario
                }
             });
        });
    };
};

export const  getConfig = ()=>{
    return(dispatch) => {
        let config = '';
        firebase.database().ref('config').child('alerta').on('value',(snapshot)=>{
            config = snapshot.val();
             dispatch({
                type:'setConfig',
                payload:{
                    config
                }
             });
        });
    };
};


export const SignInAction = (email,password)=>{
	return(dispatch) =>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((user)=>{
             let uid = firebase.auth().currentUser.uid;
             dispatch({
             	type:'changeUid',
             	payload:{
             		uid:uid
             	}
             });
    	})
        .catch((error)=>{
            switch(error.code){
                case 'auth/invalid-email':
                    alert("Email invalido!");
                    break;
                case 'auth/user-disabled':
                    alert("Usuário desativado!");
                    break;
                case 'auth/user-not-found':
                    alert("Usuario não encontrado");
                    break;
                case 'auth/wrong-password':
                    alert("Usuario e/ou senha errados");
                    break;

            }
        });
	};	
};

export const changeEmail = (email) =>{
    return{
    	type:'changeEmail',
    	payload:{
    		email:email
    	}
    };
};

export const changeSexo = (sexo) =>{
    return{
        type:'changeSexo',
        payload:{
            sexo:sexo
        }
    };
};

export const changePassword = (pass) =>{
    return{
    	type:'changePassword',
    	payload:{
    		pass:pass
    	}
    };	
};
export const changeConfirmPassword = (repass) =>{
    return{
        type:'changeConfirmPassword',
        payload:{
            repass:repass
        }
    };  
};

export const changeName = (name) =>{
    return{
    	type:'changeName',
    	payload:{
    		name:name
    	}
    };	
};

export const changeData_nasc = (data_nasc) =>{
    return{
        type:'changeData_nasc',
        payload:{
            data_nasc:data_nasc
        }
    };  
};
