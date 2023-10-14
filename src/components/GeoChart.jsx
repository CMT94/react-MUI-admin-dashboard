import React from "react";

import { useTheme } from "@mui/material";
import { tokens } from "../theme";

import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../data/mockGeoFeatures";
import { mockGeographyData as data } from "../data/mockData";

const GeoChart = ({ isDashboard }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const customGeoChartTheme = {
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
    <ResponsiveChoropleth
      data={data}
      theme={customGeoChartTheme}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1}
      borderColor="#152538"
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: colors.grey[100],
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default GeoChart;