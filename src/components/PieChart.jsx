import React from "react";
import { useTheme } from "@mui/material";

import { tokens } from "../theme";
import { mockPieData as data } from "../data/mockData";
import { ResponsivePie } from "@nivo/pie";

const PieChart = ({ isDashboard }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const customChartTheme = {
    axis: {
      domain: {
        line: {
          stroke: colors.grey[100],
        },
      },
      legend: {
        text: {
          fill: colors.grey[100],
        },
      },
      ticks: {
        line: {
          stroke: colors.grey[100],
          strokeWidth: 1,
        },
        text: {
          fill: colors.grey[100],
        },
      },
    },
    legends: {
      text: {
        fill: colors.grey[100],
      },
    },
    tooltip: {
      container: {
        color: colors.grey[500],
      },
    },
  };

  return (
    <ResponsivePie
      data={data}
      theme={customChartTheme}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.35}
      arcLabelsSkipAngle={11}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;