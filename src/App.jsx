import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Products from './pages/Products'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
     <CartProvider>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products/>} />
            {/* <Route path="products/:id" element={<SingleProduct/>} /> */}
            {/* <Route path="about" element={<About />} /> */}
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
    </CartProvider>

    </>
  )
}

export default App
