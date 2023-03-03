import {combineReducers} from "redux"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage";

// import required reducers 
import authReducer from "./auth-reducers/auth-reducer";


// User Session maintain confoiguration 

const persistConf = {
    key: "root",
    storage: storage,
    whiteList: ['authStates']
};

const rootReducer = combineReducers({
    authStates : authReducer,
});


export default persistReducer(persistConf, rootReducer);