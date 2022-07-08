import React from "react"
import { App } from "../../../App";
import Home from "../../views/home";
import { driveReducer, initialDirections } from "../reducers/driveAuth";

const DriveContext = React.createContext({});

const DriveProvider = ({ children }: any) => {
    const [stateA, dispatchA] = React.useReducer(driveReducer, initialDirections);

    const actionsD = React.useMemo(() => ({
        direction: (initA: any, destinyA: any) => {
            try {
                stateA.initAddress = initA;
                stateA.destinyAddress = destinyA;
                dispatchA({ type: 'DRIVE', init: initA, destiny: destinyA });
            } catch (err) {
                console.log(err)
            }
        }
    }), []);

    return (
        <DriveContext.Provider value={[stateA, actionsD]}>
            {children}
        </DriveContext.Provider>
    );
}

export default DriveContext;
export { DriveProvider, DriveContext }