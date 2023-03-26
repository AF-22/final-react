import React from 'react'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart'

import '../Cart/cart.css'

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name: 'Pablo', 
      email: 'pablo@gmail.com',
      phone: '123123',
      address: 'asd'
    },
    items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({id}) => console.log(id))

  }

  if (cart.length === 0) {
    return (
      <>
        <p>No Hay Elementos En El Carrito</p>
        <Link to='/'>Hacer Compras</Link>
      </>
    );
  }
  
  return (
    <> 
      <div className='cart__container'>
        {
          cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        <p>
          TOTAL: {totalPrice()}
        </p>
        <button className='btn' onClick={handleClick}>Emitir Compra</button>
      </div>
    </>
  )
}

export default Cart