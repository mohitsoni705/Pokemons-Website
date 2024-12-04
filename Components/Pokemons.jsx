import React, { useEffect, useState } from 'react'
import { PokemonCard } from './PokemonCard';
import { Loader } from './Loader';

const Pokemons = () => {
    const [pokemon,setPokemon]=useState([]);
    const [input, setInput]=useState("");
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);
    const API="https://pokeapi.co/api/v2/pokemon?limit=124";
    const Pokemon=async()=>{
        try{
            const res= await fetch(API);
            const data = await res.json();
            const Dataurl=data.results.map(async (CurElem)=>{
                const res= await fetch(CurElem.url);
                const data=await res.json();
                return data;
             });
             const DataResponse=await Promise.all(Dataurl);
             console.log(DataResponse);
             setPokemon(DataResponse);
             setLoading(false);
             
        }
        catch(error){
            setError(error);
            setLoading(false);
        }
    }
    useEffect(()=>{
        Pokemon();
    },[])

    if(loading){
        return <Loader/>;
    }
    if(error){
        return <h1>Error:{error.message}</h1>;
    }
    //handle input change
  const searchData=pokemon.filter((curPokemon)=>
    curPokemon.name.toLowerCase().includes(input.toLowerCase()))
  return (
      <div className='container'>
        <h1 className="heading">Pokemons Cards:124</h1>
        <div className='search'>
            <h2>Search Pokemon:</h2>
        <input type="text" placeholder='Enter Pokemon Name' value={input} onChange={(e)=>setInput(e.target.value)}/>
        </div>
        <div className="pokemon-data">
        <ul className='pokemons-list'>
        {searchData.map((curElem)=>{
            return(
                <PokemonCard key={curElem.id} pokemonData={curElem}/>
            )  
        })}
        </ul>
        </div>
    </div>
  )
}


export default Pokemons
