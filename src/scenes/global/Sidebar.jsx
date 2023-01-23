import React from "react";

import { Link } from "react-router-dom";

import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";

import { Box, IconButton, Typography, useTheme } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import { tokens } from "../../theme";

const navItemList = [
  {
    type: undefined,
    list: [
      {
        title: "Dashboard",
        to: "/",
        icon: <HomeOutlinedIcon />,
      },
    ],
  },
  {
    type: "data",
    list: [
      {
        title: "Manage Team",
        to: "/team",
        icon: <PeopleOutlinedIcon />,
      },
      {
        title: "Contacts Information",
        to: "/contacts",
        icon: <ContactsOutlinedIcon />,
      },
      {
        title: "Invoices Balances",
        to: "/invoices",
        icon: <ReceiptOutlinedIcon />,
      },
    ],
  },
  {
    type: "pages",
    list: [
      {
        title: "Profil Form",
        to: "/form",
        icon: <PersonOutlinedIcon />,
      },
      {
        title: "Calendar",
        to: "/calendar",
        icon: <CalendarTodayOutlinedIcon />,
      },
      {
        title: "FAQ",
        to: "/faq",
        icon: <HelpOutlinedIcon />,
      },
    ],
  },
  {
    type: "charts",
    list: [
      {
        title: "Bar Chart",
        to: "/bar",
        icon: <BarChartOutlinedIcon />,
      },
      {
        title: "Pie Chart",
        to: "/pie",
        icon: <PieChartOutlineOutlinedIcon />,
      },
      {
        title: "Line Chart",
        to: "/line",
        icon: <TimelineOutlinedIcon />,
      },
      {
        title: "Geography Chart",
        to: "/geography",
        icon: <MapOutlinedIcon />,
      },
    ],
  },
];

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [selected, setSelected] = React.useState("Dashboard");

  return (
    <Box
      sx={{
        ".ps-menu-button:hover": {
          background: "transparent !important",
        },
      }}
    >
      <ProSidebar
        defaultCollapsed={isCollapsed}
        backgroundColor={`${colors.primary[400]} !important`}
        rootStyles={{
          borderRight: "1px solid transparent",
          height: "100%",
        }}
      >
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* PROFIL SECTION - START */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-use"
                  width="80px"
                  height="80px"
                  src={"../../assets/user.png"}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  John Doe
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Administrator
                </Typography>
              </Box>
            </Box>
          )}
          {/* PROFIL SECTION - END */}

          {/* NAV MENU - START */}
          <Box
            paddingLeft={isCollapsed ? undefined : "10%"}
            sx={{
              "& .ps-menuitem-root.ps-active > .ps-menu-button": {
                color: "#6870fa !important",
                background: "transparent !important",
              },
            }}
          >
            {navItemList.map((navItem, navItemIndex) => (
              <React.Fragment key={navItemIndex}>
                <Typography
                  key={navItemIndex}
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "10px 0 5px 20px", textTransform: "capitalize" }}
                >
                  {navItem.type}
                </Typography>

                <React.Fragment>
                  {navItem.list.map((item, itemIndex) => (
                    <Item
                      key={itemIndex}
                      title={item.title}
                      to={item.to}
                      icon={item.icon}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  ))}
                </React.Fragment>
              </React.Fragment>
            ))}
          </Box>
          {/* NAV MENU - END */}
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;
