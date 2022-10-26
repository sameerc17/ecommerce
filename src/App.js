import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar'
import About from './pages/About'
import Cart from './pages/Cart'
import Error from './pages/Error'
import Home from './pages/Home';
import Login from './pages/Login'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Footer from './components/Footer';

function App() {
  return <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='products' element={<Products/>}/>
    <Route path='products/:id' element={<SingleProduct/>} />
    <Route path='cart' element={<Cart/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </>
}

export default App;
