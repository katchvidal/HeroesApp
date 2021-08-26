import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroebyId } from '../../selectors/getHeroById'

export const HeroScreen = ({ history }) => {

    const { id }  = useParams()
    

    const hero = useMemo(() => getHeroebyId( id ), [ id ])

    const {
        superhero, 
        publisher, 
        alter_ego, 
        first_appearance, 
        characters
    } = hero

    if (!hero){
        return < Redirect to="/" />
    }


    //  Boton que nos hace Retroceder -> Usando la Props History 
    const handleReturn = () => {

        if( history.length <=2){
            history.push('/')
        }

        history.replace('/')
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${id}.jpg`} className="img-thumbnail" alt={ superhero }></img>
            </div>

            <div className="col-8">
                <h3> {superhero} </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b>  { alter_ego }</li>
                    <li className="list-group-item"> <b> Publisher: </b>  { publisher }</li>
                    <li className="list-group-item"> <b> first_appearance: </b>  { first_appearance }</li>
                </ul>
                <h5 className="text">
                    characters <p> { characters } </p>
                </h5>

                <button className="btn btn-secondary" onClick={ handleReturn }> Back </button>
            </div>

        </div>
    )
}
