import axios from "axios";
import { createContext, useState, useEffect, Children } from "react";

const AppState = ({children}) => {

    const [resources, setResources] = useState({})    

    const getResources = async (resource, id) => {
        const { data } = await axios.get(`https://academiageek-sprint-2.herokuapp.com/${resource}/${id}`);
        setResources(data)
    }

    return(
        <AppContext.Provider value={{
            resources,
            getResources
        }}>
            { children}
        </AppContext.Provider>
    )
    
}

export const AppContext = createContext();

export default AppState;