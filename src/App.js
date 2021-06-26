import { Route, Switch } from 'react-router-dom'
import AllMeetups  from './pages/AllMeetups'
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';

import { Container } from 'react-bootstrap'
import MainNavigation from './components/layout/MainNavigation';
import Hero from './components/layout/Hero';

function App() {
  return (
    <Container>
      
      {/* Nav Bar */}
      <MainNavigation />
       {/* Dec section  */}
      <Hero />

      <Switch>
      <Route exact path='/'>
        <AllMeetups />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetup />
      </Route>
      <Route path='/fav'>
        <Favorites />
      </Route>
      </Switch>

      <footer className='pb-2 font-bold'>Built by Pritesh</footer>

    </Container>
  );
}

export default App;
