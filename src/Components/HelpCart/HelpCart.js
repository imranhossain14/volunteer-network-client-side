import React from 'react';
import { Link } from 'react-router-dom';


const HelpCart = (props) => {
    
    const{Name,image} =props.data;
   
   
   
    // var letter_Count = 0;
    // for (var position = 0; position < str.length; position++) 
    //     {
    //         if (str.charAt(position) == letter) 
    //         {
    //         letter_Count += 1;
    //         }
    //     }
    //     return letter_Count;
    //     }
 
    //    let CardColor= 'bg-danger';
    //    if (letter_Count % 4 === 0) {
    //        CardColor= 'bg-danger';
    //    } else if (letter_Count % 4 === 1) {
    //        CardColor = 'bg-success';
    //    } else if (letter_Count% 4 === 2) {
    //        CardColor = 'bg-warning';
    //    } else if (letter_Count % 4 === 3) {
    //        CardColor = 'bg-info';
    //    }
    return (
        <Link className = "container col-md-2 mr-4 ml-5" to="/register">
        <div >
           
           <div>
           <img src={image} alt="" style={{height:"200px", width:"220px"}}/>
           <p className="bg-success  mb-3 rounded-bottom  font-weight-bold text-light pt-4 text-center" style={{height:"80px", width:"220px"}}>{Name}</p>
           </div>
                   </div>
        </Link>
    );
};



export default HelpCart;