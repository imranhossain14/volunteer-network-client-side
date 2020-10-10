import { id } from 'date-fns/esm/locale';
import React from 'react';

const Event = (props) => {

  const{name,image}=props.data;
  console.log(props);

  
  return (  <div>
    <div className="card m-3 event-card event-card">
        <img className="card-img-top" src={image} alt="Card img cap" />

        <div >
            <div className="card-body text-center" >
          <p className="card-title text-black"><b>{name}</b></p>
            </div>
        </div>

    </div>
</div>
);
};





export default Event;