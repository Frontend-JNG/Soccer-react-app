import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import Grid2 from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { theme } from "../themes/theme";
import { ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  elevation: 3,
}));

const Leagues = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://api-football-standings.azharimm.site/leagues").then(
      (res) => {
        console.log(res.data.data);
        setData(res.data.data);
      }
    );
  }, []);

  return (
    <Grid2 container spacing={2}>
      <Grid2 item xs={6}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              p: 6,
              bgcolor: "background.default",
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr" },
              gap: 2,
            }}
          >
            {data?.map((data) => (
              <Item key={data.id} elevation={12} onHover={() => {}}>
                <img src={data.logos.light} alt="logo" />
                <h4>{data.name}</h4>
              </Item>
            ))}
          </Box>
        </ThemeProvider>
      </Grid2>
    </Grid2>
  );
};
export default Leagues;
