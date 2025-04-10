import React, { useState } from 'react'
import ListMovies from "./Movies.json"

export default function Header({filter, values, clickEvent}) {
  // const list_export = ListMovies;

  // const HandleFilteradd = (e) =>{
  //   const { id, value } = e.target;
  //   const genre = value;
  //   if (genre === 'All') {
  //     set(list_export);
  //   } else {
  //     let filter_value = list_export.filter(movie => movie.genre === genre);
  //     set(filter_value);
  //   }
  // }

  const HandleinputValue = (e) =>{
    const {id, value} = e.target;
    // console.log(value);
    values(value);
  }

  const HandleFilteradd = (e) =>{
    const {id , value} = e.target;
    // console.log(value, id);
    filter(value);
  }

  return (
    <header className='header-sc d-flex'>
        <div className='hd-container container d-flex'>
            <h4>Boolan Movie</h4>
            <div className='form-cont container d-flex'>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Genere
                </button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" type="button" id='selection-1' value="All" onClick={HandleFilteradd}>All</button></li>
                  <li><button className="dropdown-item" type="button" id='selection-2' value="Azione" onClick={HandleFilteradd}>Azione</button></li>
                  <li><button className="dropdown-item" type="button" id='selection-3' value="Thriller" onClick={HandleFilteradd}>Thriller</button></li>
                  <li><button className="dropdown-item" type="button" id='selection-4' value="Romantico" onClick={HandleFilteradd}>Romantico</button></li>
                </ul>
            </div>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Cerca un film..." onChange={HandleinputValue}/>
            <button className='btn btn-primary' id='btn-add' onClick={() =>{clickEvent()}}>Add</button>
            </div>
        </div>
    </header>
  )
}
