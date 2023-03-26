import Item from '../Item'
import React from 'react'
import '../ItemList/itemList.css'

const ItemList = ({data = []}) => {
  return (
    <div className='itemList'>
      {
        data.map(film => <Item key={film.id} info={film} />)
      }
    </div>
  );
}

export default ItemList
