import React from "react";
import Header from "../../components/Header";

import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="BAR CHART" subtitle="A Simple Bar Chart Example" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
