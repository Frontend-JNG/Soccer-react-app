import React, { useState, useEffect } from "react";
import "../App";
import axios from "axios";


const Leagues = () => {
  const [data, setData] = useState([]);
  const [selectedLeague, onLeagueSelect] = useState();

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
        <div key={league.id} 
          league = {league}
          onLeagueSelect = {onLeagueSelect}
          className="league-div"
         >
          <img src={league.logos.light} 
          alt="#" 
          onClick={handleClick} 
          />
          <h4>{league.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Leagues;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


}

