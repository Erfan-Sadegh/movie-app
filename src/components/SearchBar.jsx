import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logo } from '../api/requests';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
    } 

  return (
    <div className='search-bar'>
        <Link to='/' >
            <img src={logo} alt="home-page" />
        </Link>
        <form onSubmit={handleSubmit} action="" name='search' method='' >
            <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search ...' />
        </form>
    </div>
  );
}

export default SearchBar;
