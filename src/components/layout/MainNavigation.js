import { Link } from 'react-router-dom'
import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context';
import { Navbar, Nav, Button } from 'react-bootstrap'

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

    return (
        <div>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand className="font-weight-bolder">Hola !</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link font-weight-bold font-bolder-hover" to="/"> Home </Link>
              <Link className="nav-link font-weight-bold font-bolder-hover" to="/new-meetup"> New_Meetup </Link>
              <Link className="nav-link font-weight-bold font-bolder-hover" to="/fav"> Fav  
              </Link>
              <Button bg="dark" variant='dark' size='sm' className='px-2'>{favoritesCtx.totalFavorites}</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default MainNavigation
