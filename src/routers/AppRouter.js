import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoute } from './DashboardRoute';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


//  Componente de Rutas Principal -> Puede ALbergar Rutas Unicas y Rutas Secuandarias
export const AppRouter = () => {

    const { usuario } = useContext( AuthContext )

    return (

          <Router>
            <div>

                <Switch>

                    {   /*
                            * 1.- Ruta Independiente -> Login Contendra una serie de elementos que necesitamos Separar 
                        */
                    }
                    < PublicRoute  exact path="/login" component={ LoginScreen } isAuthenticated={usuario.logged} />
                    
                    
                    {
                        /*
                            * 2.- Rutas Secudarias puede Agrupar una o mas rutas  
                        */
                    }
                     <PrivateRoute path="/" component={ DashboardRoute } isAuthenticated={usuario.logged} />

                </Switch>

            </div>
  
          </Router>

    )

}
