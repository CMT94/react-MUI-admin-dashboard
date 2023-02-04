import React from "react";

import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title="GEOGRAPHY CHART"
        subtitle="A Simple Geography Chart Example"
      />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geography;
