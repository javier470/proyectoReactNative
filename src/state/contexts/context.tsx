import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext } from "react";
import { Alert } from "react-native";
import { App } from '../../../App'
import { NavigationContext, useNavigation } from "@react-navigation/native";
import { loginReducer, initialLoginState } from "../reducers/auth";

const AuthContext = React.createContext({});


const UserProvider = () => {
    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
    const actions = React.useMemo(() => ({
        signIn: async (userName: string, password: string) => {
            let userToken: any;
            userToken = null
            if (userName == 'User' && password == '123') {
                try {
                    userToken = 'fss'
                    loginState.userToken = await AsyncStorage.setItem('token',userToken)
                    loginState.singedIn = true
                    Alert.alert('Logged', `Welcome, ${userName}`)
                } catch (err) {
                    console.log(err)
                }
            }else if(userName != 'User' || password != '123'){
                Alert.alert('Wrong Email or Password');
                loginState.singedIn = false
            }
            dispatch({ type: 'LOGIN', id: userName, token: userToken })
            
        },
        signOut: async () => {
            try {
                await AsyncStorage.removeItem('token')
            } catch (err) {
                console.log(err)
            }
            dispatch({ type: 'LOGOUT' })
        },
        signUp: () => {
        },
    }), []);

    return (
        <AuthContext.Provider value={[loginState ,actions]}>
            <App />
        </AuthContext.Provider>
    );
}

export default AuthContext
export { UserProvider, AuthContext }