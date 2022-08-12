import React, { useState } from "react";
import "../App.css";
import Leagues from "./Leagues";
import Standings from "./Standings";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";

const Content = () => {
  const [active, setActive] = useState(true);

  return (
    <Grid
      container
      spacing={2}
      display="flex"
     
      style={{ justifyContent: "center", marginTop: "5px" }}
    >
      <Grid item xs={2}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          onClick={() => setActive(true)}
        >
          <h2 style={{ color: active ? "secondary" : null }}>Leagues</h2>
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          onClick={() => setActive(false)}
        >
          <h2 style={{ color: !active ? "secondary" : null }}>Standings</h2>
        </Button>
      </Grid>
      {active ? <Leagues /> : <Standings />}
    </Grid>
  );
};

export default Content;
