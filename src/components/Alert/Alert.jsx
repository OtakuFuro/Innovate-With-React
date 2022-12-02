import React from 'react';
import PropTypes from 'prop-types';
import MuiAlert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import CheckCircle from "@mui/icons-material/CheckCircle";

const icons = {
    CheckCircleOutline,
    CheckCircle,
  };
  
const Icon = (props) => {
    const IconComponent = icons[props.name];
    return <IconComponent fontSize="inherit" />;
};

const Alert = (args) => {
    return (
        <MuiAlert
        severity={args.severity}
        icon={<Icon name={args.icon} fontSize="inherit" />}
        action={
          args.action && (
            <Button color="inherit" size="small">
              UNDO
            </Button>
          )
        }
      >
        <AlertTitle>{args.title}</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </MuiAlert>
      );
}

export default Alert;