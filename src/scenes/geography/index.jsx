import React from "react";

import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";

const Geography = () => {
  return (
    <Box m="20px">
      <Header />
      <Box height="75vh">
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geography;
