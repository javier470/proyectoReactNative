import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext } from "react";
import { Alert } from "react-native";
import { App } from '../../../App'
import { NavigationContext, useNavigation } from "@react-navigation/native";
import { loginReducer, initialLoginState } from "../reducers/auth";

const AuthContext = React.createContext();


const UserProvider = ({ navigation }: any) => {
    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
    const actions = React.useMemo(() => ({
        signIn: async (userName: any, password: any) => {
            let userToken: any;
            userToken = null
            if (userName == 'user' && password == '123') {
                try {
                    userToken = 'fss'
                    await AsyncStorage.setItem('token', userToken)
                    Alert.alert('Logged', `Welcome, ${userName}`)
                    console.log('logged')
                } catch (err) {
                    console.log(err)
                }
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
        <AuthContext.Provider value={actions}>
            <App />
        </AuthContext.Provider>
    );
}

export default AuthContext
export { UserProvider, AuthContext }