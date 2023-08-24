import React from 'react';
import { NavLink} from "react-router-dom";
import {MdTheaters} from 'react-icons/md'

const Navbar = () => {
    const activeStyle = {
        color:'red'
    }

    return (
        <nav>
            <MdTheaters className='icon'/>
            <ul>
                <li>
                    <NavLink to="" style={({isActive}) => (isActive ? activeStyle : undefined)}>Home</NavLink>
                </li>
                <li className='nav-itme'>
                    <NavLink to="movies" style={({isActive}) => (isActive ? activeStyle : undefined)}>Movies</NavLink>
                </li>
                <li className='nav-itme'>
                    <NavLink to="users" style={({isActive}) => (isActive ? activeStyle : undefined)}>Users</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;