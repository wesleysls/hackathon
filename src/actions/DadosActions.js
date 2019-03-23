import firebase from '../firebaseConnection';


export const  getPedidosList = (supermercado,callback,callback2)=>{
    return(dispatch) => {
        firebase.database().ref('supermercados').child(supermercado).child('pedidos').child('entrega').orderByChild('data_pedido').on('value',(snapshot)=>{           
            let pedidos = [];
                snapshot.forEach((childItem)=>{
                        pedidos.push({
                            key:childItem.key,
                            status:childItem.val().status,
                            troco:childItem.val().troco,
                            horaEntrega:childItem.val().horaEntrega,
                            tipoPag:childItem.val().tipoPag,
                            valor:childItem.val().valor,
                            data_pedido:childItem.val().data_pedido,
                            usuario:childItem.val().usuario,
                            tipo:childItem.val().tipo
                        });           
                });

            callback();

            if(pedidos.length == 0){
                 callback2();
            }

            dispatch({
                type:'setPedidosList',
                payload:{
                    pedidos:pedidos
                }
            });
        });
    };
};




