import { useState,useReducer } from 'react';
import './App.css';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function Test() {
const [formData, setFormData] = useReducer(formReducer, {});
const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);

  //  setTimeout(() => {
  //    setSubmitting(false);
  //  }, 3000)
 }

   const handleChange = event => {
   setFormData({
     name: event.target.name,
     value: event.target.value,
   })
 }

  return (
   <div className="wrapper">
      <h1>KodeCamp Intern Profile form</h1>
      {submitting &&
        <div>
          <h4>Your Profile</h4>:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>:  {value}</li>
            ))}
          </ul>
        </div>
      }

     
      {(submitting ?
      
      <div></div> 
      :
      
       <form onSubmit={handleSubmit}>
      
          <label>
            <p>First Name</p>
            <input name="First Name" onChange={handleChange}/>
          </label>
        
      
          <label>
            <p>Last Name</p>
            <input name="Last Name" onChange={handleChange}/>
          </label>
        
        
          <label>
            <p>E-Mail</p>
            <input type="email" name="E-Mail" onChange={handleChange}/>
          </label>
        

         <label>
           <select name="Gender" onChange={handleChange}>
               <option value="">Choose your Gender</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Others">Others</option>
           </select>
         </label>
        
          {/* <label>
            <p>Gender</p>
            <input typy="geder" name="Gender" onChange={handleChange}/>
          </label> */}
          <label>
            <p>Addrss</p>
            <input typy="text" name="Address" onChange={handleChange}/>
          </label>
          <label>
            <p>BIO</p>
            {/* <input typy="sex" name="Gender" onChange={handleChange}/> */}
            <textarea name="BIO" id="" cols="30" rows="10" onChange={handleChange}></textarea>
          </label>
        
       
        <button type="submit">Submit</button>
      </form>
      
      )}
     
    </div>
  );
}

export default Test;



