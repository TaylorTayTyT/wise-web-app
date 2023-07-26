import * as React from 'react';
import { useState, useEffect } from 'react';
import WISEHeader from '../Components/Headers/WISEHeader';
import style from '../Styles/home.module.css';
import SideNav from '../Components/SideNav/SideNav';
import WISECardHome from '../Components/Cards/WISECardHome';
import ListFlat from '../Components/List/ListFlat';
import WISEDataList from '../Components/Inputs/WISEDataList';
import WISEStandardButton from '../Components/Buttons/WISEStandardButton';
import WISEModalHeader from '../Components/Modals/WISEModalHeader';
import Icon from '../Assets/icons';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Language(props) {
    const [saveClicked, setSaveClicked] = useState(false)
    const [cancelClicked, setCancelClicked] = useState(false)
    const [yesClicked, setYesClicked] = useState(false)

    const languages = [
        { name: 'English', id: 1 },
        { name: 'Spanish', id: 2 },
        { name: 'Korean', id: 3},
    ]

    // TODO: add functionality for changing language
    const handleSaveClicked = () => {
        setSaveClicked(true);
    }

    const handleCancelClicked = () => {
        setCancelClicked(true);
    }

    const handleDoneClicked = () => {
        setSaveClicked(false);
        setYesClicked(false);
    }

    const handleNoClicked = () => {
        setCancelClicked(false);
    }

    const handleYesClicked = () => {
        setCancelClicked(false);
        setYesClicked(true);
    }

    return ( 

        <div>
            <SideNav />
            <div className={style.page}>
                <WISEHeader title="Language" dark="true" hasTextButton="true"></WISEHeader>
                <div className={style.page2}>
                
                    <div className={style.item}>
                        <br/><br/>
                        <h5>
                            You currently have the app language set to:
                        </h5>
                        <p>
                            {props.children}
                        </p>
                        <br/><br/>
                        <h5>
                            To change, type your desired language in the input below and select it from the menu once it pops up.
                        </h5>
                        <br/>
                        <div>
                        <WISEDataList placeholder="Type your desired language." items={languages} ></WISEDataList>
                        </div>
                        <Row className={style.buttonContainer}>
                            <Col className={style.button}>
                                <WISEStandardButton type="secondary" size="large" handleClick={() => handleCancelClicked()}>Cancel</WISEStandardButton>
                            </Col>
                            <Col className={style.button}>
                                <WISEStandardButton type="primary" size="large" handleClick={() => handleSaveClicked()}>Save</WISEStandardButton>
                            </Col>
                        </Row>
                    
                    </div>
                </div>
            </div>
            <WISEModalHeader 
                type="primary"
                title="Language Saved!"
                text="The app has now been set to a new language. You can come back and change the preferred language at any time."
                btn1="Done"
                icon={<Icon.Check/>}
                open={saveClicked}
                handleBtn1Click={() => handleDoneClicked()}
                />
            
            <WISEModalHeader 
                type="secondary"
                title="Cancel Submission?"
                text="Are you sure you want to cancel this submission? If you do, the app will continue with the existing language preset."
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
        
    )
}