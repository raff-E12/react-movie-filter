import React from 'react'
import ListMovie from "./Movies.json"

export default function Cards({link}) {
    const list_export = link;
  return (
    <>
    {list_export.map((element, index) => {
        return(
            <div className="card" key={index}>
            <div className="card-body">
              <h5 className="card-title">{element.title}</h5>
              <p className="card-text">{element.genre}</p>
              <a href="#" className="btn btn-primary">Visita</a>
            </div>
          </div>
        )
    })}
    </>
  )
}
