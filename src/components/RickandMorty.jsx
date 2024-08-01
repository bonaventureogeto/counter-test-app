import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const RickAndMorty = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const charactersData = async () => {
            try {
                const query = searchQuery ? `&name=${searchQuery}` : '';
                const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}${query}`);
                const data = await response.json();
                setCharacters(data.results);
                setTotalPages(data.info.pages);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        charactersData();
    }, [page, searchQuery]);

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setPage(1); // Reset to the first page for new search results
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4 text-center">Rick and <Link to="/calculator">Morty</Link> Characters</h1>
            <div className="mb-4">
                <input 
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search for a character..."
                    className="w-full p-2 text-lg border border-gray-300 rounded-md"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {characters.map((character) => (
                    <Link key={character.id} to={`/character/${character.id}`}>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src={character.image} alt={character.name} className="w-full h-48 object-cover mb-4" />
                            <h2 className="text-2xl font-bold mb-2">{character.name}</h2>
                            <p className="text-gray-700">Status: {character.status}</p>
                            <p className="text-gray-700">Species: {character.species}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <button 
                    onClick={handlePreviousPage} 
                    disabled={page === 1}
                    className="p-2 bg-blue-500 text-white rounded-lg mr-2 disabled:opacity-50"
                >
                    Previous
                </button>
                <button 
                    onClick={handleNextPage} 
                    disabled={page === totalPages}
                    className="p-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
                >
                    Next
                </button>
            </div>
            <p className="text-center mt-4">Page {page} of {totalPages}</p>
        </div>
    );
}

export default RickAndMorty;
