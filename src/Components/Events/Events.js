import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Events = () => {
    const[events,setEvents] = useState([]);
    useEffect(()=>{
        fetch('https://safe-sea-63369.herokuapp.com/Tasks')
        .then(res=> res.json())
        .then(data =>
            // setEvents(data)
            console.log(data)
            
            )
    },[])
    return (
        <div>
          {
              events.map((data)=> <Event data={data} key={data._id}></Event>)
          }  
        </div>
    );
};

export default Events;