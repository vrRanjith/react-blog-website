import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const userData = localStorage.getItem("user");
let parsedUser = null;

try {
    parsedUser = JSON.parse(userData);
} catch (error) {
    // Handle the parsing error, if needed
    console.error("Error parsing user data from localStorage:", error);
}



const INITIAL_STATE = {
    user: parsedUser,
    isFetching: false,
    error:false
};
 
export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => { 
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state])
    
    return (
        <Context.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch 
        }}>
            {children}
        </Context.Provider>
    )
}
