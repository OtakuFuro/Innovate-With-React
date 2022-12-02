import React from "react";

import Alert from "components/Alert"


export default {
  title: "Material UI/Alert",
  component: Alert,
  argTypes: {
    severity: {
      control: {
        type: "select",
        options: ["error", "info", "warning", "success"],
      },
    },
    icon: {
      control: {
        type: "select",
        options: ["CheckCircle", "CheckCircleOutline"],
      },
    },
  },
};

const Template = (args) => <Alert {...args} />;

export const MuiAlert = Template.bind({});
MuiAlert.args = {
  title: "Error",
  severity: "error",
  icon: "CheckCircle",
  action: true,
};

export const SecondAlert = Template.bind({});
SecondAlert.args = {
  title: "Info",
  severity: "info",
  icon: "CheckCircle",
  action: true,
};