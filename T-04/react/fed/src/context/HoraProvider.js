import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const HoraContext = React.createContext();

const HoraProvider = (props) => {

    const [users, setUsers] = useState({});

    useEffect(async () => {
        const response = await axios.get('http://localhost:3000/usuarios')
            .catch(err => console.log("Erro: ", err))

        setUsers(response.data);
    }, []);

    const [posts, setPosts] = useState({});

    useEffect(async () => {
        const response = await axios.get('http://localhost:3000/horario/mostrar')
            .catch(err => console.log("Erro: ", err))

        setPosts(response.data);
    }, [])

    return (
        <HoraContext.Provider value={{ users: users }, { posts: posts }}>
            {props.childrean}
        </HoraContext.Provider>
    );
}

export default HoraProvider;