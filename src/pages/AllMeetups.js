// import DUMMY_DATA from './../data/DummyData';
import MeetupList from './../components/layout/meetups/MeetupList';
import { useState, useEffect } from 'react';
import { CardColumns, Spinner } from 'react-bootstrap'

function AllMeetups() {

    const [isloading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);


    // (fn, array of dependencies)
    useEffect(() => {       
        setIsLoading(true)
        fetch(
            'https://react-meetup-app-4ff25-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
            ).then(response=>{
                return response.json();
            }).then(data => {
                const meetupsDataFromNet = [];

                for(const key in data) {
                    const meetupObject = {
                        id: key,
                        ...data[key]
                    };
                meetupsDataFromNet.push(meetupObject);
                }
                console.log(meetupsDataFromNet);
                setIsLoading(false)
                setLoadedMeetups(meetupsDataFromNet)
            }); 
        // 2nd  - dependency -> omit no issue
        // compare with last time 
        // [] = once when loaded, 
        // if provided => isLoading
        // if not change then it will run  
        // external dependencies can be added
    }, []);

    if(isloading){
        <Spinner animation="grow" variant="dark" />
    }


    return (
        <div>
            <h1>AllMeetups</h1>
            <CardColumns>
                <MeetupList meetupsListOfItems={loadedMeetups}/>
            </CardColumns>     
        </div>
    )
}

export default AllMeetups
