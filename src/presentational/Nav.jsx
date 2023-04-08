import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/skills'>Skills</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
        <NavLink to='/cantact'>Contact</NavLink>
    </div>
  )
}
