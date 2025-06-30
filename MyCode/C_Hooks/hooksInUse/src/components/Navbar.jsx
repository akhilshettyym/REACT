import { useContext } from 'react'
import { counterContext } from '../hooks/useContext'

const Navbar = () => {
  const count = useContext(counterContext)
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Navbar {count}</span>
        </div>
      </nav>

    </>
  )
}

export default Navbar;