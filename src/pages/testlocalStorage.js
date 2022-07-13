import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TestLocalStorage = () => {
    let navigate = useNavigate();
   const [name, setName] = useState([]);
   const [pwd, setPwd] = useState([]);

   const handle = () => {
      localStorage.setItem('Name', JSON.stringify(name));
      localStorage.setItem('Password', JSON.stringify(pwd));
      navigate('/test');
   };
   const remove = () => {
      localStorage.removeItem('Name');
      localStorage.removeItem('Password');
   };
   return (
      <div className="App">
         <h1>Name of the user:</h1>
         <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <h1>Password of the user:</h1>
         <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
         />
         <div>
            <button onClick={handle}>Done</button>
         </div>
         {localStorage.getItem('Name') && (
            <div>
               Name: <p>{localStorage.getItem('Name')}</p>
            </div>
         )}
         {localStorage.getItem('Password') && (
            <div>
               Password: <p>{localStorage.getItem('Password')}</p>
            </div>
         )}
         <div>
            <button onClick={remove}>Remove</button>
         </div>
      </div>
   );
};
export default TestLocalStorage;