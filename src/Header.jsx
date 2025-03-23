import React from 'react'
import { Link } from 'react-router-dom'
import { usePro } from './Context'


function Header() {
// 

const {isLogIn, setIsLogIn} = usePro()

  return (
    <header className={`w-full border p-3 ${isLogIn ? 'visible' : 'hidden'}`}>
        <nav>
        <ul className='flex justify-center items-center gap-5'>
            <Link to='/home'><li>Home</li></Link>
            <Link to='/tasks'><li>Tasks</li></Link>
            <Link onClick={() => {
              setIsLogIn(false)
            }} to='/'><li>LogOut</li></Link>
        </ul>
        </nav>
    </header>

  )
}

export default Header