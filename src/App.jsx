import { useEffect, useState } from 'react';
import './App.css'
import ContentCards from './assets/ContentCards'
import Header from './assets/Header'
import ListMovies from "./assets/Movies.json"

function App() {
    const [isSet, SetSets] = useState(ListMovies);
    const [isFilter, SetFilter] = useState("All");

    useEffect(()=>{
      const FilterListAdd = isFilter === "All" ? ListMovies : ListMovies.filter( list => list.genre === isFilter);
      SetSets(FilterListAdd);
    },[isFilter])

  return (
    <>
    <Header filter={SetFilter}/>
    <ContentCards links={isSet}/>
    </>
  )
}

export default App
