import axios from "axios";
import { createContext, useState, useEffect, Children } from "react";

const AppState = ({children}) => {

    const [resources, setResources] = useState({
        data: null,
        loading: true
    })    

    const getResources = async () => {
        const getData = async resource => {
             const { data } = await axios.get(`https://academiageek-sprint-2.herokuapp.com/${resource}`)
             return data;
        }

        setResources({
            data: {
                guajolotas: await getData("guajolotas"),
                bebidas: await getData("bebidas"),
                tamales: await getData("tamales"),
                sabores: await getData("sabores"),
            },
            loading: false
        })
    }
    const [food, setfood] = useState("guajolotas");
    const [id, setId] = useState(0) 

    useEffect(() => {
        getResources()
  }, [])

    return(
        <AppContext.Provider value={{
            resources,
            food,
            setfood,
            id, 
            setId
        }}>
            { children}
        </AppContext.Provider>
    )

}

export const AppContext = createContext();

export default AppState;