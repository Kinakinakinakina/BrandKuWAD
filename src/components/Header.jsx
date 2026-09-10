import { Link } from "react-router"

const Header = () => {
  return (
    <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about" className="text-red-500">About</Link>
        </nav>
    </header>
  )
}

export default Header

