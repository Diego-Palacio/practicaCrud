import React , { useState,useEffect}  from 'react';
import axios from 'axios';

const Pokemon = () =>{

const [pokemons,setPokemon]= useState("");
const [imagen,setImagen]= useState();
const [habilidades,setHabilidades]=useState([]);

const obtenerPokemon=async()=> {
    const apii = await axios .get('https://pokeapi.co/api/v2/pokemon/24');
    const usarApi= await apii.data;
 
    setPokemon(usarApi.name);
   
    setImagen(usarApi.sprites.back_default);
    console.log(apii)
    console.log(usarApi.abilities);
    setHabilidades(usarApi.abilities);
}

    
    useEffect( () => {
    obtenerPokemon()
},[]);


return(
        <div className="contenedorPokemon">
                <h1 className="textoPokemon"> {pokemons} </h1>
                <img src={imagen} className="imagen"/>
                <h2 className="habilidades"> {} </h2>

              {
                  habilidades.map(item =>

                     <div>
                            <p key= {item.slot} > {item.ability.name} </p>
                     </div>
                  )

              }

                

        </div>


);


}


export default Pokemon;