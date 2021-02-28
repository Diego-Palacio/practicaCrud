import React , { useState,useEffect}  from 'react';
import axios from 'axios';

const Pokemon = () =>{

    const [pokemon,setPokemon]= useState(); 
    const obtenerPokemon= async()=>{
       // const resp= await axios.get('https://pokeapi.co/api/v2/pokemon/6');
      // const resp= await axios.get('https://jsonplaceholder.typicode.com/users');
       const resp = await axios .get ('http://api.weatherunlocked.com/api/current/ar.B1665?app_id=9665fa7e&app_key=21441351f87acf2247784dcd93d46d05')
        const pokemons= await resp.data ;
       console.log(resp.data)
        setPokemon(pokemons.temp_c);
    }
    
   useEffect( () => {
        obtenerPokemon()
    },[])
 

    return (

        <div className="contenedor-temperatura">
            
            <h1 className="texto-tempBsAs"> Temperatura en Buenos aires </h1>
            <h2 className="temperatura" >    {pokemon}º </h2>

         
        </div>
    );

}

export default Pokemon;