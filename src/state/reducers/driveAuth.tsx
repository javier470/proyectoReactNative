const initialDirections = {
    initAddress: null,
    destinyAddress: null,
}

const driveReducer = (prevState: any, action: any) => {
    switch (action.type) {
        case 'DRIVE':
            return {
                ...prevState,
                initAddress: action.init,
                destinyAddress: action.destiny,
            }
    }
}

export {initialDirections, driveReducer}