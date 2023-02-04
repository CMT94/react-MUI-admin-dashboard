import React from "react";

import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";

import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";

import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import GeoChart from "../../components/GeoChart";
import StatBox from "../../components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard John." />
      </Box>

      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlined sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
