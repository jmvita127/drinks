import React, {createContext, useState, useEffect} from 'react';
import Axios from 'axios';

//crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {
    //state del provider
    const [idReceta, guardarIdReceta] = useState(null); //guardar id
    const [infoReceta, guardarReceta] = useState({});

    //una vez que se obtiene idreceta, llamar a la api
    useEffect(() => {
      const obtenerReceta = async () => {
        if(!idReceta) return;
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
        //console.log(url);
        const resultado = await Axios.get(url);
        //console.log(resultado.data.drinks[0]);
        guardarReceta(resultado.data.drinks[0]);
      }
      obtenerReceta();
    }, [idReceta]);


    return(
     <ModalContext.Provider
        value={{
            infoReceta,
            guardarIdReceta,
            guardarReceta
        }}>
            {props.children}
     </ModalContext.Provider>
    );
}

export default ModalProvider;