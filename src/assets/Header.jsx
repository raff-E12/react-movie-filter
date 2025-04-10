import React, { useState } from 'react'
import ListMovies from "./Movies.json"

export default function Header() {
  const [isSet, SetSets] = useState(ListMovies);

  const HandleFilteradd = (e) =>{
    const { id, value } = e.target;
    console.log(id, value);
  }

  return (
    <header className='header-sc d-flex'>
        <div className='hd-container container d-flex'>
            <h4>Boolan Movie</h4>
            <div className='form-cont container d-flex'>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Genere
                </button>
                <ul class="dropdown-menu">
                  <li><button class="dropdown-item" type="button" id='selection-1' value="Azione" onClick={HandleFilteradd}>Azione</button></li>
                  <li><button class="dropdown-item" type="button" id='selection-2' value="Thiller" onClick={HandleFilteradd}>Thiller</button></li>
                  <li><button class="dropdown-item" type="button" id='selection-3' value="Romantico" onClick={HandleFilteradd}>Romantico</button></li>
                </ul>
            </div>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Cerca un film..." />
            <button className='btn btn-primary' id='btn-add'>Add</button>
            </div>
        </div>
    </header>
  )
}
