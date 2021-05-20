import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Home = () => {

    const { getResources, resources } = useContext(AppContext)
    
    const verde = resources?.url;
  
    useEffect(() => {
        getResources("guajolotas",1)
  }, [])
    return (
        <>
        <h1>I'm at Home</h1>
        <img src={verde}/>
        </>
    );
}

export default Home;