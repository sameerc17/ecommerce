import { Link } from "react-router-dom"
const Navbar = () => {
    return <nav className='navbar'>
        <div className="nav-center">
            <ul className="nav-links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/products'>Products</Link>
                <Link to='/cart'>Cart</Link>
                <Link to='/login'>Login</Link>
            </ul>
        </div>

    </nav>
}
export default Navbar