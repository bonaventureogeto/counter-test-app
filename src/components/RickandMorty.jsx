import { useState, useEffect } from "react";

const RickandMorty = () => {
    const [characters, setCharacters] = useState([]);

    const charactersData = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character/?page=9");
        const data = await response.json();
        console.log(data.results);
        setCharacters(data.results);
    }
    useEffect(() => {
        charactersData()
    }, []);
    

    return (
        <div>
            <h1>Rick and Morty Characters</h1>
            {
                characters.map((character) => {
                    return (
                        <div key={character.id}>
                            <h2>{character.name}</h2>
                            <img src={character.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RickandMorty;