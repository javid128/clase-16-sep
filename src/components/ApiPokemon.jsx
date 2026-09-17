import { useState, useEffect } from 'react';

export const ApiPokemon = () => {
    // Variable de estado para guardar los pokemones
    const [pokemones, setPokemones] = useState([]);
    // Llamamos la API con el nuevo hook useEffect
    useEffect(() => {
        // Utilizamos promesas
        async function obtenerPokemones() {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
            const data = await response.json();
            setPokemones(data.results);
        }
        obtenerPokemones();
    }, []);

    return (
        <div>
            <h2>Pokemones</h2>
            <ul>
                {
                    pokemones.map((poke, index) => {
                        return (
                            <li key={index}>
                                <strong>Nombre:</strong>
                                {poke.name}
                                <strong>Url:</strong>
                                {poke.url}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
