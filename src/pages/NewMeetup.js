import NewMeetupForm from './../components/layout/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';

function NewMeetup() {

    // hook to manipulate browser history 
    // after data submission
    const history = useHistory();

    function addMeetupParentHandler(meetupData) {
        // vanilla JS send HTTP requests 
        // alternative for axios
        // just add .json at end & create meetup table
        // fetch returns a promise
        fetch(
            'https://react-meetup-app-4ff25-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type' : 'application/json',
                },
            }
            ).then(()=>{
                // go back to home page
                history.replace('/');
            }); 
    }

    return (
        <div>
            <h1>New meetup</h1>
            <NewMeetupForm onAddMeetupChildObject={addMeetupParentHandler}/>
        </div>
    )
}

export default NewMeetup
