import * as React from 'react';
import style from '../../Styles/modal.module.css';
import WISEStandardButton from '../Buttons/WISEStandardButton';

import Modal from '@mui/material/Modal';

/**
 *  Creates a WISE Modal using WISEStandardButton.
 * 
 *  @prop title - The title of the modal
 *  @prop text - The text of the modal
 *  @prop btn - The text within the button
 *  @prop open - boolean 
 *  @prop handleClose - function
 *                 
 */
export default function WISEModal(props){
    return(
        <div>
            <Modal open={props.open} onClose={props.handleClose}>
                <div className={style.modal_container}>
                    <div className={style.text}>
                        <h4>{props.title}</h4>
                        <p>{props.text}</p>
                        <WISEStandardButton type="primary" size="medium">{props.btn}</WISEStandardButton>
                    </div>
                </div>
            </Modal>
        </div>
    )
}