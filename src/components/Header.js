import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export const Header = () => {

    return (
        <div>
            <NavLink to='/' end>Home</NavLink>
            <NavLink to='sobre'>Sobre</NavLink>
        </div >
    )
}
