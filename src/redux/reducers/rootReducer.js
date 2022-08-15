import documentReducer from "./documentReducer";
import { combineReducers } from "redux"; 
import contactReducer from "./contactReducers";
import educationReducer from "./educationReducers";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    documentReducer: documentReducer,
    contactReducer:contactReducer,
    educationReducer:educationReducer,
    authReducer:authReducer
})

export default rootReducer;