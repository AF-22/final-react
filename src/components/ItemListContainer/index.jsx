import React, {useState, useEffect} from 'react'
import Title from '../Title'
import ItemCount from '../ItemCount'
import ItemList from '../ItemList'

const films = [
  {id: 1, image: 'https://www.ecartelera.com/carteles/17700/17767/001.jpg', title: 'Kimetsu no Yaiba - Rumbo a la aldea de los herreros' },
  {id: 2, image: 'https://www.ecartelera.com/carteles/17500/17507/001_p.jpg', title: 'One Piece Film: Red' },
  {id: 3, image: 'https://www.ecartelera.com/carteles/17200/17247/001_p.jpg', title: 'Jujutsu Kaisen 0: The Movie' },
];

export const ItemListContainer = ({text}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout (() => {
        resolve(films);
      }, 3000);
    });
    getData.then(res => setData(res));

  }, [])

  const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    }

  return (
    <>
    <Title greeting={text}/>
    <ItemCount initial={1} stock={5} onAdd={onAdd} />
    <ItemList data={data} />
    </>
  )
}

export default ItemListContainer;