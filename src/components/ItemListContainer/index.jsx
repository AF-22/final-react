import React, {useState, useEffect} from 'react'
import Title from '../Title'

import ItemList from '../ItemList'
import {useParams} from 'react-router-dom'

const films = [
  {id: 1, image: 'https://www.ecartelera.com/carteles/16700/16740/001_m.jpg', category: 'films', title: 'Kimetsu no Yaiba - Rumbo a la aldea de los herreros' },
  {id: 2, image: 'https://www.ecartelera.com/carteles/17500/17507/001_p.jpg', category: 'films', title: 'One Piece Film: Red' },
  {id: 3, image: 'https://www.ecartelera.com/carteles/17200/17247/001_p.jpg', category: 'films', title: 'Jujutsu Kaisen 0: The Movie' },
  {id: 4, image: 'https://es.web.img3.acsta.net/c_310_420/pictures/22/08/01/10/00/1492791.jpg', category: 'series', title: 'Chainsaw Man' },
  {id: 5, image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71C8nCHzBCL.jpg', category: 'series', title: 'Hunter × Hunter' },
];

export const ItemListContainer = ({text}) => {
  const [data, setData] = useState([]);

  const {categoriaId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout (() => {
        resolve(films);
      }, 1000);
    });
    if (categoriaId) {
      getData.then(res => setData(res.filter(film => film.category === categoriaId)));
    } else {
      getData.then(res => setData(res));
    }

  }, [categoriaId])

 
  return (
    <>
    <Title greeting={text}/>
    <ItemList data={data} />
    </>
  )
}

export default ItemListContainer;