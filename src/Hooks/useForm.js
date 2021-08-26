import { useState } from "react"


//  Recibimos un objeto { } -> Puede Contener nombre : '' , email : '' --- etc.
export const useForm = ( initialState = { } ) => {


    const [formvalues, setformvalues] = useState(initialState)

    const reset = () => {
        setformvalues( initialState )
    }

    //  Target una propiedad del evento OnChange
    const handleinputchange = ( { target } ) =>{

        //  Actualiza el Estado del Formulario Pasando -> 
        setformvalues({

            //  Pasa las Propiedades que no nos interesa modificar 
            ...formvalues, 
            //  Apunta al Target Value={ email , name .... } -> Valor del Target 
            [target.name] : target.value 

        })

    }

    return [ formvalues , handleinputchange, reset ]

}