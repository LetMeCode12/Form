import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form';
import {shipReducer} from "../src/redux/reducers/shipReducer"


export default combineReducers({
    form,
    ships:shipReducer,
});