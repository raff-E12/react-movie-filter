import React from 'react'
import Cards from './Cards'

export default function ContentCards({links}) {
  return (
    <section className='container-md d-flex container-cards'>
        <Cards link={links}/>
    </section>
  )
}
