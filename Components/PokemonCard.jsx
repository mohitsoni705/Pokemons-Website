import "./Pokemon.css";

export const PokemonCard = ({ pokemonData }) => {
  return (
    <>
      <li className="pokemon-cards">
        <figure>
            <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name}/>
        </figure>
        <h1>Pokemon Name: {pokemonData.name}</h1>
        <div className="type">
            <p>Type: {pokemonData.types.map(curtype => curtype.type.name).join(", ")}</p>
        </div>
        <div className="grid-three-cols pokemon-info1">
            <div className="pokemon-info">
               <p>Height: {pokemonData.height}</p>
            </div>
            <div className="pokemon-info">
                 <p>Weight: {pokemonData.weight}</p>
            </div>
            <div className="pokemon-info">
                <p>Speed: {pokemonData.stats[5].base_stat}</p>
            </div>
        </div>
        <div className="grid-three-cols">
            <div className="pokemon-info">
                <p>{pokemonData.base_experience}</p>
                <span>Experience</span>
            </div>
            <div className="pokemon-info">
                <p>{pokemonData.stats[1].base_stat}</p>
                <span>Attack</span>
            </div>
            <div className="pokemon-info">
                <p>{pokemonData.abilities.map(curElem => curElem.ability.name).slice(0, 1).join(", ")}</p>
                <span>Abilities</span>
            </div>
        </div>
      </li>
    </>
  );
};
