import { heroes } from "../data/heroes";

export const getHeroebyId = ( id  ) => {

    return heroes.find(hero=> hero.id === id )
}
