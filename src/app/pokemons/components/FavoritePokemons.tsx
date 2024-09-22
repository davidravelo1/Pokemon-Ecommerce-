'use client';
import { useAppSelector } from '@/store'
import React, { useState } from 'react'
import PokemonGrid from './PokemonGrid';
import { IoHeartOutline } from 'react-icons/io5';
export const NotFavorites = () => {
    return (
      <div className="flex flex-col h-[50vh] items-center justify-center">
        <IoHeartOutline size={100} className="text-red-500"/>
        <span>No ha añadido favoritos</span>
      </div>
    )
  }
function FavoritePokemons() {
    const FavoritePokemons = useAppSelector(state => Object.values(state.pokemons) );
    const [pokemons, setPokemons]=useState(FavoritePokemons)
  return (
    <>
    {
        pokemons.length===0 ? <NotFavorites/> : <PokemonGrid pokemons={ FavoritePokemons }/>
    }</>
  )
}
export default FavoritePokemons



