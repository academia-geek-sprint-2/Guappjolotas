import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Home = () => {

    const { resources } = useContext(AppContext)
    
    const guajolotaVerde = resources.data.guajolotas[0];

    return (
        <>
        <h1>I'm at Home</h1>
        <img src={guajolotaVerde.url}/>
        </>
    );
}

export default Home;