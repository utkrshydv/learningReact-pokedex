import { first151Pokemon, getFullPokedexNumber } from "../utils"

import { useState } from "react"

export default function SideNav(props){

  const { selectedPokemon, setSelectedPokemon, handleCloseMenu, showSideMenu } = props

  const [ searchValue, setSearchValue ] = useState('')

  const filteredPokemon = first151Pokemon.filter((element, elementIndex) => {
    if((getFullPokedexNumber(elementIndex)).includes(searchValue)){ return true}

    if(element.toLowerCase().includes(searchValue.toLowerCase())){ return true }

    return false

  })

  return (
    <nav className={' '+ (!showSideMenu ? " open" : '')} >
      <div className={"header " + (!showSideMenu ? " open" : '')}>
        <button 
        onClick={handleCloseMenu}
        className="open-nav-button">
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
        <a href="./index.html" style={{textDecoration: "none"}}>
          <h1 className="text-gradient">
         Pokédex
          </h1>
          </a>
        </div>
        <input placeholder="e.g. 001 or bulba..." type="text" value={searchValue} onChange={(e) => {
          setSearchValue(e.target.value)
          console.log(searchValue)
        }} />
      {filteredPokemon.map((pokemon, pokemonIndex) => {
        return (
          <button 
          key={pokemonIndex}
          onClick={() => {
            setSelectedPokemon(first151Pokemon.indexOf(pokemon))
            handleCloseMenu()
          }}
          className={'nav-card '+ (pokemonIndex === selectedPokemon? 'nav-card-selected' : ' ')}>
            <p>#{getFullPokedexNumber(first151Pokemon.indexOf(pokemon))}</p>
            
            <p>{pokemon.toLowerCase()}</p>
            
          </button>
        )
      })}
    </nav>
  )
}