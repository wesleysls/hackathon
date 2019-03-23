const initialState = {
	pedidos:[],
	
	
};

const DadosReducer = (state = initialState, action) => {
    


	if(action.type == 'setPedidosList'){
		return {...state, pedidos:action.payload.pedidos};
	}
   

	return state;

};

export default DadosReducer;