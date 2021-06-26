import { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import FavoritesContext from './../../../store/favorites-context';

const meetupCardStyle = {
    borderRadius: 20,
}

function MeetupItem(props) {
    
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  
    function toggleFavoriteStatusHandler() {
      if (itemIsFavorite) {
        favoritesCtx.removeFavorite(props.id);
      } else {
        favoritesCtx.addFavorite({
          id: props.id,
          title: props.title,
          description: props.description,
          image: props.image,
          address: props.address,
        });
      }
    }

    return (
        <Card className="text-dark mt-3 mb-4 border-0 shadow" style={meetupCardStyle}>
            <Card.Img className="w-100 h-25 p-0" src={props.image} alt={props.title} />
            <Card.Body>
                <Card.Text className="p-2">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Card.Text>{props.address}</Card.Text>
                </Card.Text>
                <Button variant="dark mr-3" className='align-left'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                </Button>
                <Button onClick={toggleFavoriteStatusHandler}>
                    {itemIsFavorite  ? 'Remove Fav' : 'Add Fav'}
                </Button>
            </Card.Body>
        </Card>
    )
}

export default MeetupItem
