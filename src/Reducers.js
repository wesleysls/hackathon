import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';
import DadosReducer from './reducers/DadosReducer';

const Reducers = combineReducers({
	auth:AuthReducer,
	dados:DadosReducer
});

export default Reducers;