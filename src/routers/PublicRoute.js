import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PublicRoute = ({
    component : Component,
    isAuthenticated,
    ...rest
}) => {



    return (

        <Route
            {...rest}
            component={ ( props ) => (
                    (!isAuthenticated)
                        ? (<Component { ...props} />)
                        : (<Redirect to='/' />)
                    )
            }
        />
    )
}
