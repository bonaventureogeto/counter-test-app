import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                const data = await response.json();
                setCharacter(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchCharacter()
    }, [id]);

    if(!character) return <div>Loading...</div>

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4 text-center">{character.name}</h1>
            <div className="flex justify-center">
                <img src={character.image} alt={character.name} className="w-65 h-65 object-cover mb-4 rounded-lg" />
            </div>
            <div className="text-center">
                <p className="text-lg"><strong>Status: </strong> {character.status }</p>
                <p className="text-lg"><strong>Species: </strong>{ character.species }</p>
                <p className="text-lg"><strong>Gender: </strong> {character.gender }</p>
                <p className="text-lg"><strong>Origin: </strong> {character.origin.name }</p>
                <p className="text-lg"><strong>Location: </strong>{ character.location.name }</p>
            </div>
        </div>
    )
}

export default CharacterDetails;