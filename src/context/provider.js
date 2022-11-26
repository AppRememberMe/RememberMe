import React, {createContext, useReducer, useState} from 'react';

export const Context = createContext();

function Provider({children}){
    const [dados, setDados] = useState(null);
    const[user, setUser] = useState(null);

    return(
        <Context.Provider 
        value={{
            dados, setDados,
            user, setUser
            }}>
            {children}
        </Context.Provider>
    )
}

export default Provider;