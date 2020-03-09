import SignInTypes from "./SignIn-dropdown.type";

const INITIAL_STATE = {
     hidden: true
};

const SignInRedcuer = (state = INITIAL_STATE, action) => {
     switch(action.type){
          case SignInTypes.SIGNIN_HIDE:
          return{
               ...state,
               hidden: !state.hidden
          };
          default:
               return state;
     }
};

export default SignInRedcuer;