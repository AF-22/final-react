import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail'

const film = {id: 1, image: 'https://www.ecartelera.com/carteles/17700/17767/001.jpg', title: 'Kimetsu no Yaiba - Rumbo a la aldea de los herreros' };

const ItemDetailContainer = () => {
  const [data, setData] = useState({});


  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout (() => {
        resolve(film);
      }, 3000);
    });
    getData.then(res => setData(res));

  }, [])

  return (
    <ItemDetail data={data} />
  )
}

export default ItemDetailContainer