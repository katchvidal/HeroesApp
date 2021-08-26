import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heores/HeroScreen'
import { Navbar } from '../components/ui/NavBar'
import { SearchScreen } from '../components/search/SearchScreen'



//  Rutas que no son Principales 
export const DashboardRoute = () => {
    return (

             

            <div>
                <Navbar />

                <Switch>

                    <Route exact path='/marvel' component={ MarvelScreen } />
                    <Route exact path='/hero/:id' component={ HeroScreen } />
                    <Route exact path='/dc' component={ DcScreen } />
                    <Route exact path='/search' component={ SearchScreen } />
                    <Redirect to='/marvel' />


                </Switch>
            </div>

    )
}
