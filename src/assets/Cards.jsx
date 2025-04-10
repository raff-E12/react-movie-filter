import React from 'react'
import ListMovie from "./Movies.json"

export default function Cards() {
    const list_export = ListMovie;
  return (
    <>
    {list_export.map((element, index) => {
        return(
            <div class="card" key={index}>
            <div class="card-body">
              <h5 class="card-title">{element.title}</h5>
              <p class="card-text">{element.genre}</p>
              <a href="#" class="btn btn-primary">Visita</a>
            </div>
          </div>
        )
    })}
    </>
  )
}
