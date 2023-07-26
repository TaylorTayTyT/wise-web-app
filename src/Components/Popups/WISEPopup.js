import * as React from 'react';
import style from "../../Styles/popup.module.css";
import buttonStyle from "../../Styles/button.module.css";
import Icons from "../../Assets/icons.js";
import { Dialog } from "@mui/material";
import TextField from "../Inputs/WISETextField.js";
import WISEButton from "../Buttons/WISEStandardButton.js";

/*
props:
- dialogText: string
- title: string
- subtitle: string
- placeholder: string
*/

export default function WISEPopup(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={() => handleClose()}
      >
        <header className={`${style.header}`}>
            {props.title}
        </header>
        <div className={`${style.body}`}>
            <div className={`${style.subtitle}`}>
                {props.subtitle}
            </div>
            <div className={`${style.textfield}`}>
                <TextField multiline={true} placeholder={props.placeholder} />
            </div>
            <span className={`${style.buttons}`}>
                <WISEButton type="secondary" size="large" children="Cancel" handleClick={() => handleClose()}/>
                &nbsp;&nbsp;&nbsp;
                <WISEButton type="primary"  size="large" children="Submit" />
            </span>
        </div>
      </Dialog>
    </>
  );
}
