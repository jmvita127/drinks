import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext';

const Formulario = () => {
    const {categorias} = useContext(CategoriasContext);
    const {buscarRecetas, guardarConsultar} = useContext(RecetasContext);

    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    //funcion para leer contenidos
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <form 
         className="col-12"
         onSubmit={e => {
             e.preventDefault();
             buscarRecetas(busqueda);
             guardarConsultar(true);
         }}
        >
            <fieldset className="text-center">
                <legend>Search drinks by categories</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                    name="nombre"
                    className="form-control"
                    type="text"
                    placeholder="Search by ingredient"
                    onChange={obtenerDatosReceta} 
                    />
                </div>
                <div className="col-md-4">
                    <select 
                     className="form-control"
                     name="categoria"
                     onChange={obtenerDatosReceta}  
                    >
                        <option value="">Select a category</option>
                        {categorias.map(categoria => (
                            <option 
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                     type="submit"
                     className="btn btn-block btn-primary"
                     value="Search Drinks" 
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;
