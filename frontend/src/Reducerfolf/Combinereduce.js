import { combineReducers } from 'redux';
import authReducer from './Reducer';
import reducer from './CatReducer';
import userreducer from './Userreduce';
// import Favreducer  from './Addtofav';
const rootReducer = combineReducers({
auth: authReducer,
Cat:reducer,
User:userreducer,
// Fave:Favreducer
// other reducers if any
});

export default rootReducer;