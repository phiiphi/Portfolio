import {AiOutlineMenu} from "react-icons/ai"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar mb-12 bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex flex-none px-2 mx-2">
          <Link to='/'>
            <AiOutlineMenu className="inline pr-2 text-3xl"/>
          </Link>
          <h1 className="text-lg font-bold align-middle">Hepep</h1>
        </div>
      </div>

      <div className="flex flex-1 mx-2 px-2">
        <div className="flex justfy-end">
            <Link to='/home' className="btn btn-ghost btn-small rounded-btn">
              Home
            </Link>
            <Link to='/about' className="btn btn-ghost btn-small rounded-btn">
              About
            </Link>

        </div>
      </div>
     
    </nav>
  )
}

export default Navbar