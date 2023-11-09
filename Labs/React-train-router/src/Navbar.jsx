import {NavLink} from 'react-router-dom'
export default function NavBar() {
  return (
    <header>
      <h1>Where's The Frickin Train</h1>
      <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/union-square">Union Square-14th St</NavLink>
      <NavLink to="/times-square">Times Square</NavLink>
      <NavLink to="/atlantic-avenue">Atlantic Ave</NavLink>
      <NavLink to="/fulton-street">Fulton St</NavLink>
      </nav>
    </header>
  )
}
