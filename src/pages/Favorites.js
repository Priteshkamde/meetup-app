import { useContext } from 'react'
import FavoritesContext from '../store/favorites-context';
import MeetupList from './../components/layout/meetups/MeetupList';
import { CardColumns } from 'react-bootstrap'

function Favorites() {
    // current snapshot context
    const favoritesCtx = useContext(FavoritesContext);
    let content;
    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You got no Favorites yet. Start Adding Some ?</p>
    } else {
        content = <CardColumns><MeetupList meetupsListOfItems={favoritesCtx.favorites} /></CardColumns>
    }

    return (
        <div>
            <h1>Favorites</h1>
            {content}
        </div>
    )
}

export default Favorites
