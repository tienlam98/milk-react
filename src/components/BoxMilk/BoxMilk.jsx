import React from 'react'
import './style.css'

export default function BoxMilk(props) {
  return (
    <div className='container'>
      <div className='left'>
        <img src={props.src}></img>
      </div>
      <div className='right'>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <div className='body'>
        <p className='price'>{props.price}</p>
        <button>MUA NGAY</button>
        </div>
      </div>
    </div>
  )
}
