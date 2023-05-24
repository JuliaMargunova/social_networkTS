import React, {FC} from "react";
import {StoreType} from "./redux/redux-store";


const StoreContext = React.createContext({} as StoreType);

type PropsType = {
    store: StoreType
}
export const Provider: FC<PropsType> = (props) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>)
}
export default StoreContext;