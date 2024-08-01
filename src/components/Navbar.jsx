import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <div>
            <Link to="/counter">Counter App</Link>
            <Link to="/calculator">Calculator</Link>
            <Link to="/display-data">DisplayData</Link>
            <Link to="/rickandmorty">RickAndMorty</Link>
        </div>
    )
}

export default Navbar;