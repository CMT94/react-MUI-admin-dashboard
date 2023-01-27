import React from "react";

import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";

import CloseIcon from "@mui/icons-material/Close";
import { AlertTitle } from "@mui/material";

const PopUpAlert = (props) => {
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  }, []);

  return (
    <Box sx={{ width: "30%" }}>
      <Fade in={open}>
        <Box>
          <Alert
            severity={props.severity}
            action={
              <IconButton
                aria-label="close"
                color={props.severity}
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2, width: "100%" }}
          >
            <AlertTitle>{props.title}</AlertTitle>
            {props.message}
          </Alert>
        </Box>
      </Fade>
    </Box>
  );
};

export default PopUpAlert;
