import documentReducer from "./documentReducer";
import { combineReducers } from "redux"; 
import contactReducer from "./contactReducers";
import educationReducer from "./educationReducers";

const rootReducer = combineReducers({
    documentReducer: documentReducer,
    contactReducer:contactReducer,
    educationReducer:educationReducer
})

export default rootReducer;