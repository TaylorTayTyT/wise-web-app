import { useState, useEffect } from 'react';
import WISEHeaderProfile from "../../Components/Headers/WISEHeaderProfile";
import CollapsibleCard from "../../Components/Cards/CollapsibleCard";
import CardContentFlat from "../../Components/Cards/CardContentFlat";
import CardContentList from '../../Components/Cards/CardContentList';
import style from "../../Styles/profile.module.css"
import SideNav from "../../Components/SideNav/SideNav";
import ReportGovernmentModal from "../Modals/ReportGovernmentModal";

import { useNavigate } from 'react-router';
import { useParams } from "react-router-dom"
import { useGovernmentEntity } from '../../gql/hooks/BCGN';
import { useEventsByOrganizer, useGroupsByOrganizer } from '../../gql/hooks';
import { Language, SortDir } from '../../gql/__generated__/graphql';

export default function GovernmentProfile(props) { 

    const navigate = useNavigate();

    const { governmentId } = useParams();
    const [call, { data }] = useGovernmentEntity(governmentId);

    const [government, setGovernment] = useState({});
    const [about, setAbout] = useState([]);
    const [services, setServices] = useState([]);
    const [governmentGroups, setGovernmentGroups] = useState([]);
    const [governmentEvents, setGovernmentEvents] = useState([]);

    const [eventsCallInput, setEventsCallInput] = useState();
    const [eventsCall, { eventsData }] = useEventsByOrganizer(eventsCallInput);

    const [groupsCallInput, setGroupsCallInput] = useState();
    const [groupsCall, { groupsData }] = useGroupsByOrganizer(groupsCallInput);

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

    async function populateProfile(government) {
        setGovernment(government)

        setAbout([
            {
                id: "description",
                header: "Description",
                text: government.description
            },
            {
                id: "contact",
                header: "Contact",
                text: `Phone Number: ${government.contactInfo==undefined || government.contactInfo.phone==undefined ? "" : government.contactInfo.phone}
                        Email: ${government.contactInfo==undefined || government.contactInfo.email==undefined ? "" : government.contactInfo.email}`
            },
            {
                id: "tags",
                header: "Tags",
                tags: government.tags,
                tagColor: "var(--gray)",
                textColor: "var(--space-cadet)"
            }
        ])

        setServices(government.services && government.services.map((item, index) => (
            {
                title: item
            }
        )))

        setEventsCallInput({
            language: Language.English,
            id: governmentId,
            sortDir: SortDir.Asc,
        })

        setGroupsCallInput({
            language: Language.English,
            id: governmentId,
            sortDir: SortDir.Asc,
        })
    
    }

    function parseEventDetails(event) {
        console.log(event)
        const dateTime = new Date(event.dateTime)
        
        return {
            title: event.name,
            date: `${dateTime.toLocaleDateString([], {dateStyle: 'long'})}`,
            location: `${event.location==undefined ? "" : event.location.address}`,
            onBtnClick: () => navigate(`/events/${event._id}`)
        }
    }

    useEffect(() => {

        console.log(governmentId)

        // call to api
        call()
            .then((response) => {
                populateProfile(response.data.bcgn)
            })
            .catch(console.error);

    }, []);

    // TODO: will be changed to appropriate call
    useEffect(() => {
        if (eventsCallInput) {
            // update displayed events
            eventsCall()
                .then((response) => {
                    setGovernmentEvents(
                        response.data && response.data.eventsByOrganizer.slice(0, Math.min(3, response.data.eventsByOrganizer.length)).map((item, index) => {
                            return parseEventDetails(item)
                        })
                    )
                })
                .catch(console.error);
        }
        
    }, [eventsCallInput]);

    // TODO: will be changed to appropriate call
    useEffect(() => {
        if (groupsCallInput) {
            // update displayed events
            groupsCall()
                .then((response) => {
                    setGovernmentGroups(
                        response.data && response.data.groupsByOrganizer.slice(0, Math.min(3, response.data.groupsByOrganizer.length)).map((item, index) => {
                            return {
                                title: item.name,
                                onBtnClick: () => navigate(`/groups/${item._id}`)
                            }
                        })
                    )
                })
                .catch(console.error);
        }
        
    }, [groupsCallInput]);


    return (
        <div>
            <div className={`${style.header_and_cards_container}`}>
                <WISEHeaderProfile 
                    dark = {false} 
                    text = {government.location==undefined ? "" : government.location.address}
                    titleText = {government.name}
                    hasTextButton = {true} 
                    backgroundColor = "var(--gray)"
                    img = "https://images.pexels.com/photos/139392/checkmate-chess-resignation-conflict-139392.jpeg?cs=srgb&dl=pexels-pixabay-139392.jpg&fm=jpg"
                    buttonData = {[
                        {id: "1", children: "Website", isStretched: false},
                        {id: "2", children: "Reviews", isStretched: false},
                        {id: "3", children: "Map", isStretched: false},

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
                        header = "Services"
                        content = 
                        {<CardContentList
                            arrow = {false}
                            hasButton = {false}
                            items = {services}>
                        </CardContentList>}
                        hasButton = {false}>
                    </CollapsibleCard>

                    <CollapsibleCard
                        header = "Groups"
                        content = 
                        {<CardContentList
                            arrow = {true}
                            hasButton = {true}
                            buttonText = "See All Groups"
                            items = {governmentGroups}>
                        </CardContentList>}
                        hasButton = {false}>
                    </CollapsibleCard>

                    <CollapsibleCard
                        header = "Events"
                        content = 
                        {<CardContentList
                            arrow = {true}
                            hasButton = {true}
                            buttonText = "See All Events"
                            items = {governmentEvents}>
                        </CardContentList>}
                        hasButton = {false}>
                    </CollapsibleCard>

                    <div className={`${style.report_button_container}`}>
                        <ReportGovernmentModal />
                    </div>
                </div>
            </div>
            <div className={`${style.menu_container}`}>
                <SideNav></SideNav>
            </div>
        </div>
    )
}