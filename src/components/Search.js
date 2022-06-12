import React, { useState } from 'react';
import SearchIcon from '../assets/icon-search.svg';

function Search({ theme, username, setUsername, data, setData }) {
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.login) setError(false);

        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => data.login ? setData(data) : setError(true));
    }

    return (
        <div className={`search search-${theme}`}>
            <div className={`search__field search__field-${theme}`}>
                <img src={SearchIcon} alt="search-icon" />
                <input type="text" placeholder="Search GitHub username..." value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className="search__submit">
                {error && <p className={`search__submit__error search__submit__error-${theme}`}>No results</p>}
                <button type="submit" onClick={handleSubmit}>Search</button>
            </div>
        </div>
    )
}

export default Search;