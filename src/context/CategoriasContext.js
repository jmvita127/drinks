import React, {createContext, useState, useEffect} from 'react';
import Axios from 'axios';

//Creacion del Context
export const CategoriasContext = createContext();

//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
   //crear state del context
   const [categorias, guardarCategorias] = useState([]);

   //ejecutar el llamado a la api
   useEffect(() => {
     const obtenerCategorias = async () => {
         const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

         const categorias = await Axios.get(url);

         guardarCategorias(categorias.data.drinks);
     }
     obtenerCategorias()
   }, [])

   return (
    <CategoriasContext.Provider
     value ={{
        categorias //para hacer disponible la categoria en los demas componentes
     }}
    >
        {props.children}
    </CategoriasContext.Provider>
   );
}

export default CategoriasProvider;