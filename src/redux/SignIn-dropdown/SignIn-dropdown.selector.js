import {createSelector} from "reselect";
import SignIn from "../../components/SignIn/SignIn-dropdown";

const SignInState = state => state.SignIn;

export const SignInHidden = createSelector(
     [SignInState],
     (SignIn) => SignIn.hidden
);

export default SignInState;