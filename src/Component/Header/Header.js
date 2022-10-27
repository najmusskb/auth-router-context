import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           
            <div className="navbar bg-primary text-primary-content">
                <Link to={'/link'} className="btn btn-ghost normal-case text-xl">Bengal Software</Link>
                <Link className="btn btn-ghost normal-case text-xl"  to={'/'}>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl"  to={'/login'}>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to={'/register'}>Resgister</Link>
            </div>
        </div>
    );
};

export default Header;