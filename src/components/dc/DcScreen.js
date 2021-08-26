import React from 'react'
import { HeroeList } from '../heores/HeroeList'

export const DcScreen = () => {



    return (
        <div>
            <h1> Heroes de Detective Comics </h1>
            <hr />

            <HeroeList publisher='DC Comics' />

        </div>
    )
}
