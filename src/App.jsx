import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import NotFound from './pages/notFound/NotFound'


function App() {
  return (
    <>
      <BrowserRouter>
          <CartProvider>
            <NavBar/>
              <Routes>  
                <Route path='/' element= {<ItemListContainer />} />
                <Route path='/categoria/:categoriaId' element= {<ItemListContainer />} />
                <Route path='/cart' element= {<Cart/>} />
                <Route path='/detalle/:detalleId' element= {<ItemDetailContainer />} />
                <Route path='contact' element={<Contact/>}/>
                
                <Route path='about' element={<About/>}/>
                <Route path='gallery' element={<Gallery/>}/>
                <Route path='plans' element={<Plans/>}/>
                <Route path='trainers' element={<Trainers/>}/>
                <Route path='*' element={<NotFound/>}/>
              </Routes>
          </CartProvider>
          <Footer/>
      </BrowserRouter>
    </>
    
  );
}

export default App;
