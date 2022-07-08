
const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
}

const initialDirections ={
    initAddress: null,
    destinyAddress: null,
}

const loginReducer = (prevState: any, action: any) => {
    switch (action.type) {
        case 'RETRIEVE_TOKEN':
            return {
                ...prevState,
                userToken: action.token,
                isLoading: false
            }

        case 'LOGIN':
            return {
                ...prevState,
                userName: action.id,
                userToken: action.token,
                isLoading: false
            }
        case 'LOGOUT':
            return {
                ...prevState,
                userName: null,
                userToken: null,
                isLoading: false
            }

        case 'REGISTER':
            return {
                ...prevState,
                userName: action.id,
                userToken: action.token,
                isLoading: false
            }
        case 'DRIVE':
            return{
                ...prevState,
                initAddress: action.initA,
                destinyAddress: action.destinyA
            }

    }
}

export { initialDirections ,initialLoginState, loginReducer }