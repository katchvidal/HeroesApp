import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'


const init = () => {
    return JSON.parse(localStorage.getItem('usuario')) || {

        logged : false
    }
}

export const HeroesApp = () => {

    const [usuario , dispatch] = useReducer( authReducer , {}, init)

    useEffect(() => {
        localStorage.setItem('usuario', JSON.stringify( usuario ))
    }, [usuario])

    return (

            //  Proveer a todas las ruas que envolvemos -> Con propiedades del useContext -> con su Reduer 
            <AuthContext.Provider value={ { usuario, dispatch } }>

                <AppRouter />


            </AuthContext.Provider>



    )
}
