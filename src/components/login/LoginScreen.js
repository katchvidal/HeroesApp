import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'


export const LoginScreen = ( { history }) => {

    const { dispatch } = useContext( AuthContext ) 


    //  Nos Auida a Continuar sin dejar rastro de la ventana anterior 
    const HandleLogin= () => {


        const LastPath = localStorage.getItem('lastpath') || '/'

        //  Aut
        dispatch({

            type : types.login,
            payload : {
                name : 'Usuario Auth '
            }
        })

        history.replace(LastPath)
    }


    return (
        <div>
            <h1> Login </h1>
            <hr/>
            <button className="btn btn-primary" onClick={ HandleLogin }>
                Login / Ingresar 
            </button>
        </div>
    )
}
