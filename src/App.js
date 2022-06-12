import React, { useState } from 'react';
import './css/App.css';
import Header from './components/Header';
import Search from './components/Search';
import DevCard from './components/DevCard';

function App() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState({
    "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
    "name": "The Octocat",
    "created_at": "2011-01-25T18:44:36Z",
    "login": "octocat",
    "bio": null,
    "public_repos": 8,
    "followers": 6034,
    "following": 9,
    "location": "San Francisco",
    "twitter_username": null,
    "blog": "https://github.blog",
    "company": "@github",
  });;

  const [theme, setTheme] = useState('light');

  return (
    <div className={`app app-${theme}`}>
      <div className={`app__container app__container-${theme}`}>
        <Header
          theme={theme}
          setTheme={setTheme}
        />
        <Search
          theme={theme}
          username={username}
          setUsername={setUsername}
          data={data}
          setData={setData}
        />
        <DevCard
          theme={theme}
          data={data}
        />
      </div>
    </div>
  )
}

export default App;