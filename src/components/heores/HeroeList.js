import React, { useMemo } from 'react'
import { getHeroebyPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroeList = ({ publisher }) => {
    
    const heroes =  useMemo(() => getHeroebyPublisher( publisher ), [ publisher ])
 
    return (

        <div className="card-columns">
            { 
                heroes.map( hero => (
                   <HeroCard 
                   key={ hero.id }  { ...hero }> 
                   </HeroCard>
                ))
            }
        </div>
    )
}
