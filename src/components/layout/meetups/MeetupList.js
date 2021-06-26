 import React from 'react'
 import MeetupItem from './MeetupItem';

 function MeetupList(props) {
     return (
         <div>
             {props.meetupsListOfItems.map(
                 meetupItem => 
                 <MeetupItem 
                    key={meetupItem.id} 
                    id={meetupItem.id}
                    image={meetupItem.image}
                    title={meetupItem.title}
                    address={meetupItem.address}
                    description={meetupItem.description}
                    />
             )}
         </div>
     )
 }
 
 export default MeetupList
 