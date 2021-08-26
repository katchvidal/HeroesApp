import { heroes } from "../data/heroes";

export const getHeroebyPublisher = ( publisher ) => {

    const publisherValid = ['DC Comics', 'Marvel Comics']

    if( !publisherValid.includes( publisher )){
        throw new Error(`${publisher} No Valido -> Validos son ${publisherValid}`)
    }

    return heroes.filter( hero => hero.publisher === publisher )
}
