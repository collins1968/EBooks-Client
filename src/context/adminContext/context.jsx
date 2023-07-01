import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    ui: JSON.parse(localStorage.getItem("ui")) || 'viewauthors'
}
//declare createContext
export const AdminContext = createContext(INITIAL_STATE);
//declare createContext
export const UIContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)
    useEffect(() => {
        localStorage.setItem("ui", JSON.stringify(state.ui))
    }, [state.ui])
    return <AdminContext.Provider value={{ ui: state.ui, dispatch }}>
        {children}
    </AdminContext.Provider>
}


