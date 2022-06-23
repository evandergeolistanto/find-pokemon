import {  useState } from "react";
import axios from "axios";

const baseURL ="https://pokeapi.co/api/v2/ability/"
export default function SearchPokemon (){
    const [search, setSearch] = useState("")
    const [pokemonName, setPokemonName] = useState([])
    const [pokemonEffectEntries, setPokemonEffectEntries] = useState([])
    const [pokemonFlavorText, setPokemonFlavorText] = useState([])

    const findPokemon =() =>{
        console.log('rendered 2times')
        axios({
            method: "GET",
            url: `${baseURL}${search}`
        }).then(result => {
            setPokemonName(result.data.pokemon)
            setPokemonEffectEntries(result.data.effect_entries)
            setPokemonFlavorText(result.data.flavor_text_entries)
        })
    }

    return (
        <div>
            <h1>POKEMON COMPONENT</h1>
            <div>
                <input placeholder="Ability" onChange={(x) => setSearch(x.target.value) }/>
                <button onClick={() => findPokemon()}>Find Pokemon</button>
            </div>
            <div><strong>Pokemon List : </strong> 
            {pokemonName.map((data, i) =>{
                return (
                    <span key={i}>{data.pokemon.name}, </span>
                )
            })}
            </div>
            <div><strong>Pokemon Effect Entries : </strong> 
            {pokemonEffectEntries.map((data, i) =>{
                return (
                    <span key={i}>{data.short_effect}, </span>
                )
            })}
            </div>
            <div><strong>Pokemon Flavor Text : </strong> 
            {pokemonFlavorText.map((data, i) =>{
                if(data.language.name == "en"){
                    return <span key={i}>{data.flavor_text}</span>
                }
            })}
            </div>
        </div>
    )
}