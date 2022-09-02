import React, { useState, useEffect } from "react";
import "../App";
import axios from "axios";


const Leagues = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-football-standings.azharimm.site/leagues")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleClick = (e) => {
    // 👇️ refers to the image element
    // if(data){
    //   setData(response.data.data)
    //   console.log(setData)
    // }
    // const handleClick = async () => {
    //   setIsLoading(true);
  
    //   try {
    //     const response = await fetch('https://reqres.in/api/users', {
    //       method: 'GET',
    //       headers: {
    //         Accept: 'application/json',
    //       },
    //     });
  
    //     if (!response.ok) {
    //       throw new Error(`Error! status: ${response.status}`);
    //     }
  
    //     const result = await response.json();
  
    //     console.log('result is: ', JSON.stringify(result, null, 4));
  
    //     setData(result);
    //   } catch (err) {
    //     setErr(err.message);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    console.log(e.target);
    console.log("Image clicked");
    
}

  return (
    <div className="leagues-container ">
      {data?.map((league) => (
        <div key={league.id} className="league-div">
          <img src={league.logos.light} alt="#" onClick={handleClick} />
          <h4>{league.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Leagues;
