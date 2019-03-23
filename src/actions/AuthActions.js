import firebase from '../firebaseConnection';

export const SignOut = (uid) =>{
    firebase.auth().signOut();
    firebase.database().ref('usuarios').child(uid).child('token').set('off');
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


export const SignUpAction =(name,telefone,estado,cidade,bairro,rua,numero,complemento,email,password,chave)=> {
    return(dispatch)=>{
    	firebase.auth().createUserWithEmailAndPassword(email,password)
    	.then((user)=>{
             let uid = firebase.auth().currentUser.uid;
             
             firebase.database().ref('Adms').child(uid).set({
             	name:name,
                telefone:telefone,
                estado:estado,
                cidade:cidade,
                bairro:bairro,
                rua:rua,
                numero:numero,
                complemento:complemento,
                email:email,
                chave:chave
             });

             firebase.database().ref('chats').once('value').then((snapshot)=>{
                 snapshot.forEach((childItem)=>{
                    firebase.database().ref('chats').child(childItem.key).child('membros').child(uid).set({
                        id:uid
                    });
                 });
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

export const  getRestaurante = (chave,callback)=>{
    return(dispatch) => {
        firebase.database().ref('supermercados').on('value',(snapshot)=>{
             let restaurante = '';
             snapshot.forEach((childItem)=>{
                if(childItem.key == chave){
                   restaurante = childItem.key;
                }
             });

             callback(restaurante);               
             dispatch({
                type:'setRestaurante',
                payload:{
                    restaurante:restaurante
                }
             });
        });
    };
};

export const  getChaves = ()=>{
    return(dispatch) => {
        firebase.database().ref('supermercados').on('value',(snapshot)=>{
             let chaves = [];
             snapshot.forEach((childItem)=>{
                chaves.push({
                    chave:childItem.key
                });
             });
           
             dispatch({
                type:'setChaves',
                payload:{
                    chaves:chaves
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

export const changeChave = (chave) =>{
    return{
        type:'changeChave',
        payload:{
            chave:chave
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

export const changeTelefone = (telefone) =>{
    return{
        type:'changeTelefone',
        payload:{
            telefone:telefone
        }
    };  
};

export const changeEstado = (estado) =>{
    return{
        type:'changeEstado',
        payload:{
            estado:estado
        }
    };  
};

export const changeCidade = (cidade) =>{
    return{
        type:'changeCidade',
        payload:{
            cidade:cidade
        }
    };  
};

export const changeBairro = (bairro) =>{
    return{
        type:'changeBairro',
        payload:{
            bairro:bairro
        }
    };  
};

export const changeRua = (rua) =>{
    return{
        type:'changeRua',
        payload:{
            rua:rua
        }
    };  
};

export const changeNumero = (numero) =>{
    return{
        type:'changeNumero',
        payload:{
            numero:numero
        }
    };  
};

export const changeComplemento = (complemento) =>{
    return{
        type:'changeComplemento',
        payload:{
            complemento:complemento
        }
    };  
};