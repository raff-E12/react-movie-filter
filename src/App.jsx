import { useState } from 'react';
import './App.css'
import ContentCards from './assets/ContentCards'
import Header from './assets/Header'
import ListMovies from "./assets/Movies.json"

function App() {
    const [isSet, SetSets] = useState(ListMovies);
  return (
    <>
    <Header links={isSet} set={SetSets}/>
    <ContentCards links={isSet}/>
    </>
  )
}

export default App
