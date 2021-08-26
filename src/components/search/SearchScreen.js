import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import { HeroCard } from '../heores/HeroCard'

//  Nos Ayuda a Parsear un Query Params
import queryString from 'query-string'
import { getHeroesbyName } from '../../selectors/getHeroesbyName'


export const SearchScreen = ( { history }) => {

    //  Leer un Parametro y Parsear 
    const location = useLocation()
    // Atrapar un valor del parametro y Parsearlo 
    const { q='' } = queryString.parse( location.search )
    
    
    const heroesFiltered = useMemo(() => getHeroesbyName( q ), [q])

    const  [ formvalues , handleinputchange  ] = useForm( {
        search : q
    })

    const { search } = formvalues

    const handlesubmit = ( e ) => {
        e.preventDefault()

        history.push(`?q=${search}`)

    }


    return (
        <div>
            <h1> Search Screen </h1>

            <div className="row">
                <div className="col-5">
                    <h4> Search Form</h4>
                    <hr/>

                    <form onSubmit={ handlesubmit }>
                        <input t
                        ype='text' 
                        placeholder="find your hero " 
                        className="form-control"
                        name='search'
                        value={ search }
                        onChange={ handleinputchange }
                        autoComplete='off'
                        >

                        </input>
                        <button 
                            type="submit" 
                            className="btn m-1 btn-block btn-outline-primary"
                            > Search</button>
                    </form>

                </div>



                <div className="col-7">

                    <h4> Results</h4>
                    <hr/>

                    {   (q==='')   
                    &&  <div className='alert alert-info'>
                            Search a Hero
                    </div>
                    }

                    {   (q !=='' && heroesFiltered.length === 0)   
                    &&  <div className='alert alert-danger'>
                            There is no a hero with { q }
                    </div>
                    }

                        {
                            heroesFiltered.map( hero => (
                                <HeroCard key={ hero.id } { ...hero }> </HeroCard>
                            ))
                        }
                </div>

            </div>
        </div>
    )
}
