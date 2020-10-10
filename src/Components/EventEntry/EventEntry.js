import React from 'react';
import { useForm } from "react-hook-form";
const EventEntry = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => 
    {
          
          fetch("https://safe-sea-63369.herokuapp.com/eventEntry",{
            method :"POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data)
          })
          .then(res=> res.json())
          .then(data=>{
            console.log(data);
          })
        };
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)} style={{width:"400px", margin:"auto" ,display: "block"}}>
               
           <input
          type="text"
          name="Name"
          className="form-control mb-2"
          placeholder="Enter Name" 
          ref={register}
        />
        <input type="text" name="image" placeholder="Place the Image URL" id="" ref={register} className="form-control mb-2"
        />
        <button type="submit">Submit Task</button>
               </form> 
        </div>
    );
};

export default EventEntry;