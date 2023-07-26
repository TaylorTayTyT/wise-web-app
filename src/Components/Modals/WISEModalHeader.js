import * as React from 'react';
import style from '../../Styles/modal.module.css';
import WISEStandardButton from '../Buttons/WISEStandardButton';

import Modal from '@mui/material/Modal';

/**
 *  Creates a WISE Modal using WISEStandardButton.
 * 
 *  @prop type - the type of modal. If left empty, renders primary modal. "secondary" for modal_header--secondary and "loading" 
 *               for modal_header--loading.
 *  @prop title - The title of the modal
 *  @prop text - The text of the modal
 *  @prop btn1 - The text within the button for a primary and text within the left most button for secondary
 *  @prop btn2 - The text within the second button for secondary
 *  @prop icon - The icon for the header
 *  @prop open - boolean 
 *  @prop handleBtn1Click - function 
 *  @prop handleBtn2Click - function              
 */
export default function WISEModalHeader({type, title, text, btn1, icon, btn2, open, handleBtn1Click, handleBtn2Click}){ 
    
    const modalType = type;

    const renderModal = () => {
        if(modalType === "secondary"){
            return(
                <div className={style.modal_container_secondary}>
                    <div className = {style.header_container}>
                        <div className={style.icon}>
                            {icon}
                        </div>
                    </div>
                    <div className={style.text_container}>
                        <div className={style.text_header}>
                            <h4>{title}</h4>
                            <p>{text}</p>
                        </div>
                        <div className={style.button_container_secondary}>
                            <div className={style.button1}>
                                <WISEStandardButton type="secondary" size="small" handleClick={handleBtn1Click}>{btn1}</WISEStandardButton>                           
                            </div>
                            <div className={style.button2}>
                                <WISEStandardButton type="primary" size="small" handleClick={handleBtn2Click}>{btn2}</WISEStandardButton>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            else if(modalType === "loading"){
            return(
                <div className={style.modal_container_loading}>
                <div className = {style.header_container}>
                    <div className={style.icon}>
                        {icon}
                    </div>
                </div>
                <div className={style.text_container}>
                    <h4>Loading...</h4>
                    <p>One Moment Please.</p>
                    <div className={style.loading_container}>
                        
                    </div>
                </div>
            </div>
            )}
            else{
            return(
                <div className={style.modal_container}>
                <div className = {style.header_container}>
                    <div className={style.icon}>
                        {icon}
                    </div>
                </div>
                <div className={style.text_container}>
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <div className={style.button_container}>
                        <WISEStandardButton type="primary" size="medium" handleClick={handleBtn1Click}>{btn1}</WISEStandardButton>
                    </div>
                </div>
            </div>
            )}
    }
    return (
        <Modal open={open} onClose={handleBtn1Click}>
            {renderModal()}
        </Modal>
    )
}