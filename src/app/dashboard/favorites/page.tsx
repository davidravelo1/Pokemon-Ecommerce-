import { PokemonGrid } from "@/app/pokemons";
import FavoritePokemons from "@/app/pokemons/components/FavoritePokemons";
import { PokemonReponse } from "@/app/pokemons/interfaces/pokemon_response";
import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemon";
import NotFound from '../../not-found';
import { IoHeartOutline } from "react-icons/io5";

const getPokemons = async( limit = 20, offset=0 ):Promise<SimplePokemon[]>=> {
  const data:PokemonReponse = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${ offset }`).then( res => res.json() );
  
  const pokemons = data.results.map( pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name 
  }))
  return pokemons; 
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151)
  
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokémons favoritos <small className="text-blue-500">favoritos</small></span>
      <FavoritePokemons/>
    </div>
  );
}
