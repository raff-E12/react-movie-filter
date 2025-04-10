import { useEffect, useState } from 'react';
import './App.css'
import ContentCards from './assets/ContentCards'
import Header from './assets/Header'
import ListMovies from "./assets/Movies.json"

function App() {
    const [isSet, SetSets] = useState(ListMovies);
    const [isFilter, SetFilter] = useState("All");
    const [isValue, setValue] = useState("");

    useEffect(()=>{
      const FilterListAdd = isFilter === "All" ? ListMovies : ListMovies.filter( list => list.genre === isFilter);
      SetSets(FilterListAdd);
    },[isFilter])

    const HandleFilterlistSet = () =>{
      const Words_parm = ListMovies.filter(list => list.title.includes(isValue));
      // console.log(Words_parm.length !== 0  ? "trovato": "non trovato");
      SetSets(list => {return Words_parm.length !== 0 ? Words_parm : list});
    }

  return (
    <>
    <Header filter={SetFilter} values={setValue} clickEvent={HandleFilterlistSet}/>
    <ContentCards links={isSet}/>
    </>
  )
}

export default App
