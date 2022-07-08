import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext } from "react";
import { Alert, Text, View } from "react-native";
import { App } from '../../../App'
import { NavigationContext, useNavigation } from "@react-navigation/native";
import { loginReducer, initialLoginState, initialDirections } from "../reducers/auth";

const AuthContext = React.createContext({});


const UserProvider = () => {
    const [address, dispatchAddress] = React.useReducer(loginReducer, initialDirections);
    const [state, dispatch] = React.useReducer(loginReducer, initialLoginState);
    const actions = React.useMemo(() => ({
        signIn: async (userName: string, password: string) => {
            let userToken: any;
            userToken = null
            if (userName == 'User' && password == '123') {
                try {
                    userToken = 'fss'
                    state.userToken = await AsyncStorage.setItem('token',userToken)
                    state.singedIn = true
                    console.log('logged')
                } catch (err) {
                    console.log(err)
                }
            }else if(userName != 'User' || password != '123'){
                Alert.alert('Wrong Email or Password');
                state.singedIn = false
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
        confirmCode: (code: number) => {
            if(code == 1234){
                console.log('Registered')
            }else{
                console.log('Incorrect code')
            }
        },
        direction: (initA:any, destinyA:any)=>{
            try {
                address.initAddress = initA;
                address.destinyAddress = destinyA;
                dispatchAddress({type: 'DRIVE', init: initA, destiny: destinyA});
            } catch (err) {
                console.log(err)
            }
        }
    }), []);

    return (
        <AuthContext.Provider value={[state ,actions]}>
            <App />
        </AuthContext.Provider>
    );
}

export default AuthContext
export { UserProvider, AuthContext }