import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <main> 
      <h1>La Mala</h1>
      <h2 className='text-center m-5'>{greeting}</h2>
      </main>
  )
}

export default ItemListContainer