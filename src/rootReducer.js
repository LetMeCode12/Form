import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form';
import {shipReducer} from "../src/redux/reducers/shipReducer"
import { reducer as modal } from 'redux-modal'

export default combineReducers({
    form,
    ships:shipReducer,
    modal
});