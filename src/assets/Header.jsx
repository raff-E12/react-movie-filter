import React, { useState } from 'react'
import ListMovies from "./Movies.json"

export default function Header() {
  const [isSet, SetSets] = useState(ListMovies);

  const HandleFilteradd = (e) =>{
    const { id, value } = e.target;
    console.log(id, value)
  }

  return (
    <header className='header-sc d-flex'>
        <div className='hd-container container d-flex'>
            <h4>Boolan Movie</h4>
            <div className='form-cont container d-flex'>
              <div className='select-wrap-sc'>
                <i class="fa-solid fa-caret-down"></i>
                <select name="list-filter" id="filter-movie" className='select-drop'>
                  <option value="All" id='select-1' selected>All</option>
                  <option value="Thiller" id='select-2'>Thiller</option>
                  <option value="Azione" id='select-3'>Azione</option>
                  <option value="Romantico" id='select-4'>Romantico</option>
                </select>
              </div>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Cerca un film..." />
            <button className='btn btn-primary' id='btn-add'>Add</button>
            </div>
        </div>
    </header>
  )
}
