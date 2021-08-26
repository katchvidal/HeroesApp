import React from 'react'
import { HeroeList } from '../heores/HeroeList'

export const MarvelScreen = () => {
    return (

        <div>
            <h1> Heroes de Marvel </h1>
            <hr/>

            <HeroeList publisher={ 'Marvel Comics'} />
        </div>
    )
}
