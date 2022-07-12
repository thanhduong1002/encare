
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Test = () => {
  useEffect(() => {
    console.log("da vao useEffect 1")
    HandleClick(); //HandleClick nằm ở đây để load khi mới vậy
    console.log("da vao useEffect 2")
}, []);
  var link = 'https://enclave-encare.herokuapp.com/api/user/appointment?id=2';
    const HandleClick = async () =>{
        await fetchFact().then((data) => {
            console.log("da load du lieu")
        })
    }

  const fetchFact = async() =>{
    return await axios.get(link).then((response)=>{
        console.log(response.data); //in ra response data
        return response.data;       
    });
} 
  // if (!post) return "No post!"

  return(
    <div>
      <button onClick={HandleClick}>Create Post</button>
    </div>
  );
};

export default Test;
