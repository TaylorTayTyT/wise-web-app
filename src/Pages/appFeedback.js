import * as React from 'react';
import { useState } from 'react';
import style from "../Styles/feedbackPage.module.css";
import WISEHeader from "../Components/Headers/WISEHeader";
import SideNav from '../Components/SideNav/SideNav';
import WISETextField from '../Components/Inputs/WISETextField';
import WISEStandardButton from '../Components/Buttons/WISEStandardButton';
import WISEModalHeader from '../Components/Modals/WISEModalHeader';
import Icon from '../Assets/icons';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AppFeedback(props) {

    const [submitClicked, setSubmitClicked] = useState(false)
    const [cancelClicked, setCancelClicked] = useState(false)
    const [yesClicked, setYesClicked] = useState(false)

    // TODO: add functionality for submitting feedback
    const handleSubmitClicked = () => {
        setSubmitClicked(true);
    }

    const handleCancelClicked = () => {
        setCancelClicked(true);
    }

    const handleDoneClicked = () => {
        setSubmitClicked(false);
        setYesClicked(false);
    }

    const handleNoClicked = () => {
        setCancelClicked(false);
    }

    const handleYesClicked = () => {
        setCancelClicked(false);
        setYesClicked(true);
    }

    return(
        <div>
            <div className={style.main_container}>
                <WISEHeader dark={true} hasTextButton={true} title="App Feedback"></WISEHeader>
                <div className={style.input_text}>
                    <h5>Please write your feedback here:</h5>
                    <WISETextField multiline={true} placeholder="Type your feedback here..." hasIcon={false} />
                    <Row className={style.buttons_container}>
                        <Col className={style.cancel_button}>
                            <WISEStandardButton type="secondary" size="large" handleClick={() => handleCancelClicked()}>Cancel</WISEStandardButton>
                        </Col>
                        <Col className={style.submit_button}>
                            <WISEStandardButton type="primary" size="large" handleClick={() => handleSubmitClicked()}>Submit</WISEStandardButton>
                        </Col>
                    </Row>
                </div>
            </div>
            <SideNav />

            <WISEModalHeader 
                type="primary"
                title="Feedback Sent!"
                text="Your feedback has been sent and is now being reviewed by our team. Thank you for helping us improve our app."
                btn1="Done"
                icon={<Icon.Check/>}
                open={submitClicked}
                handleBtn1Click={() => handleDoneClicked()}
                />
            
            <WISEModalHeader 
                type="secondary"
                title="Cancel Submission?"
                text="Are you sure you want to cancel this submission? If you do, your responses will not be saved and we will not receive your message."
                btn1="No"
                btn2="Yes"
                icon={<Icon.Warning/>}
                open={cancelClicked}
                handleBtn1Click={() => handleNoClicked()}
                handleBtn2Click={() => handleYesClicked()}
                />
            
            <WISEModalHeader 
                type="primary"
                title="Submission Canceled!"
                text="Your submission has been canceled."
                btn1="Done"
                icon={<Icon.Check/>}
                open={yesClicked}
                handleBtn1Click={() => handleDoneClicked()}
                />
        </div>
    );
}