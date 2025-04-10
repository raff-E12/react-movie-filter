import React from 'react'

export default function Header() {
  return (
    <header className='header-sc d-flex'>
        <div className='hd-container container d-flex'>
            <h4>Boolan Movie</h4>
            <div className='form-cont container d-flex'>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            <button className='btn btn-primary'>Add</button>
            </div>
        </div>
    </header>
  )
}
