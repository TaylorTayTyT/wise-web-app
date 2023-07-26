import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import WISEHeaderProfile from "../../Components/Headers/WISEHeaderProfile";
import CollapsibleCard from "../../Components/Cards/CollapsibleCard";
import CardContentFlat from "../../Components/Cards/CardContentFlat";
import WISEStandardButton from "../../Components/Buttons/WISEStandardButton";
import style from "../../Styles/profile.module.css"
import WISETagButton from "../../Components/Buttons/WISETagButton";
import SideNav from "../../Components/SideNav/SideNav";
import ReportEventModal from "../Modals/ReportEventModal";
import Icon from '../../Assets/icons';
import WISEModalHeader from '../../Components/Modals/WISEModalHeader';
import WISEPopup from '../../Components/Popups/WISEPopup';

import { useParams } from "react-router-dom"
import { useEvent } from '../../gql/hooks';

export default function EventProfile(props) { 

    const { eventId } = useParams();
    const [call, { data }] = useEvent(eventId);

    const [event, setEvent] = useState({});
    const [about, setAbout] = useState([]);
    const [details, setDetails] = useState([]);
    const [reportClicked, setReportClicked] = useState(false);
    const [submitClicked, setSubmitClicked] = useState(false);
    const [cancelClicked, setCancelClicked] = useState(false);
    const [yesClicked, setYesClicked] = useState(false);

    // TODO: add functionality for submitting report
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
        setReportClicked(false);
    }

    const handleYesClicked = () => {
        setReportClicked(false);
        setYesClicked(true);
    }

    function populateProfile(event) {
        setEvent(event)

        setAbout([
            {
                id: "description",
                header: "Description",
                text: event.description
            },
            {
                id: "org-contact",
                header: "Organizer Contact",
                text: `Phone Number: ${event.contactInfo==undefined || event.contactInfo.phone==undefined ? "" : event.contactInfo.phone}
                        Email: ${event.contactInfo==undefined || event.contactInfo.email==undefined ? "" : event.contactInfo.email}`
            },
            {
                id: "tags",
                header: "Tags",
                tags: event.tags,
                tagColor: "var(--pistachio)",
                textColor: "var(--space-cadet)"
            }
        ])

        const dateTime = new Date(event.dateTime)
        setDetails([
            {
                id: "location",
                header: "Location",
                text: `${event.location==undefined ? "" : event.location.address}`
            },
            {
                id: "date",
                header: "Date",
                text: `${dateTime.toLocaleDateString([], {dateStyle: 'long'})}`
            },
            {
                id: "time",
                header: "Time",
                text: `${dateTime.toLocaleTimeString([], {timeStyle: 'long'})}`
            }
        ])
    }

    useEffect(() => {

        // call to api
        call()
            .then((response) => {
                populateProfile(response.data.event)
            })
            .catch(console.error);

    }, []);

    return (
        <div>
            <div className={`${style.header_and_cards_container}`}>
                <WISEHeaderProfile 
                    dark = {false} 
                    text = {event.location==undefined ? "Virtual" : event.location.address}
                    titleText = {event.name}
                    hasTextButton = {true} 
                    backgroundColor = "#A6CC80"
                    img = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Halleyparknovember.jpg/1024px-Halleyparknovember.jpg"
                    buttonData = {[
                        {id: "1", children: "Organizer Profile", isStretched: true},
                        {id: "2", children: "RSVP", isStretched: false},
                        {id: "3", children: "Join", isStretched: false},

                    ]}
                ></WISEHeaderProfile>
                <div className={`${style.cards_container}`}>
                    <CollapsibleCard
                        header = "About"
                        content = 
                        {<CardContentFlat
                            sections = {about}>
                        </CardContentFlat>}
                        hasButton = {false}>
                    </CollapsibleCard>

                    <CollapsibleCard 
                        header = "Event Details"
                        content = 
                        {<CardContentFlat
                            sections = {details}>
                            </CardContentFlat>}                    
                        hasButton = {false}>
                    </CollapsibleCard>

                    <div className={`${style.report_button_container}`}>
                        <WISEStandardButton type="secondary" handleClick={() => setReportClicked(true)}>Report Event</WISEStandardButton>
                    </div>
                </div>
            </div>
            <SideNav />

            <WISEModalHeader 
                type="secondary"
                title="Report Event?"
                text="You can report events that you feel are suspicious to help us keep this space safe."
                btn1="No"
                btn2="Yes"
                icon={<Icon.Flag/>}
                open={reportClicked}
                handleBtn1Click={() => handleNoClicked()}
                handleBtn2Click={() => handleYesClicked()}
                />
            <WISEPopup dialogText="dialog" title="title" subtitle="subtitle" placeholder="placeholder">

            </WISEPopup>
        </div>
    )
}