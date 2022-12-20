import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="relative w-full flex-wrap top-0 bg-indigo-900 width-max">
            <ul className='flex space-x-4 py-3 px-7 mb-4 text-white text-2xl'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/appointments">Appointments</Link>
                </li>
                <li>
                    <Link to="/playground">Playground</Link>
                </li>
                <li>
                    <Link to="/login">Log In</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
                <li>
                    <Link to="/test">Test</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;