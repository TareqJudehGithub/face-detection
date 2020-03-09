import {combineReducers} from "redux";

import SignInRedcuer from "./SignIn-dropdown/SignIn-dropdown.reducer";

const rootReducer = combineReducers({
     SignIn: SignInRedcuer
});

export default rootReducer;