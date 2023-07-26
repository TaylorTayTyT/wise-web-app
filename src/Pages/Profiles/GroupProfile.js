import { useState, useEffect } from 'react';
import WISEHeaderProfile from "../../Components/Headers/WISEHeaderProfile";
import CollapsibleCard from "../../Components/Cards/CollapsibleCard";
import WISEStandardButton from "../../Components/Buttons/WISEStandardButton";
import style from "../../Styles/profile.module.css"
import WISETagButton from "../../Components/Buttons/WISETagButton";
import SideNav from "../../Components/SideNav/SideNav";
import ReportGroupModal from "../Modals/ReportGroupModal";
import CardContentFlat from '../../Components/Cards/CardContentFlat';
import CardContentList from '../../Components/Cards/CardContentList';

import { useNavigate } from 'react-router';
import { useParams } from "react-router-dom"
import { useGroup, useEventsByOrganizer } from '../../gql/hooks';
import { Radius, Language, SortDir } from '../../gql/__generated__/graphql';


export default function GroupProfile(props) { 

    const navigate = useNavigate();

    const { groupId } = useParams();
    const [call, { data }] = useGroup(groupId);

    const [group, setGroup] = useState({});
    const [about, setAbout] = useState([]);
    const [activities, setActivities] = useState([]);
    const [groupEvents, setGroupEvents] = useState([]);

    const [eventsCallInput, setEventsCallInput] = useState();
    const [eventsCall, { eventsData }] = useEventsByOrganizer(eventsCallInput);

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

    function populateProfile(group) {
        setGroup(group)

        setAbout([
            {
                id: "description",
                header: "Description",
                text: group.description
            },
            {
                id: "org-contact",
                header: "Organizer Contact",
                text: `Phone Number: ${group.contactInfo==undefined || group.contactInfo.phone==undefined ? "" : group.contactInfo.phone}
                        Email: ${group.contactInfo==undefined || group.contactInfo.email==undefined ? "" : group.contactInfo.email}`
            },
            {
                id: "tags",
                header: "Tags",
                tags: group.tags,
                tagColor: "var(--maize-crayola)",
                textColor: "var(--space-cadet)"
            }
        ])

        setActivities(group.activities && group.activities.map((item, index) => (
            {
                title: item
            }
        )))

        setEventsCallInput({
            language: Language.English,
            id: groupId,
            sortDir: SortDir.Asc,
        })
    
    }


    function parseEventDetails(event) {
        const dateTime = new Date(event.dateTime)

        return {
            title: event.name,
            date: `${dateTime.toLocaleDateString([], {dateStyle: 'long'})}`,
            location: `${event.location==undefined ? "" : event.location.address}`,
            onBtnClick: () => navigate(`/events/${event._id}`)
        }
    }

    useEffect(() => {

        console.log(groupId)

        // call to api
        call()
            .then((response) => {
                populateProfile(response.data.group)
            })
            .catch(console.error);

    }, []);

    // TODO: will be changed to appropriate call
    useEffect(() => {
        if (eventsCallInput) {
            // update displayed events
            eventsCall()
                .then((response) => {
                    setGroupEvents(
                        response.data && response.data.eventsByOrganizer.slice(0, Math.min(3, response.data.eventsByOrganizer.length)).map((item, index) => {
                            return parseEventDetails(item)
                        })
                    )
                })
                .catch(console.error);
        }
        
    }, [eventsCallInput]);

    return (
        <div>
            <div className={`${style.header_and_cards_container}`}>
                <WISEHeaderProfile 
                    dark = {false} 
                    text = {group.location==undefined ? "Virtual" : group.location.address}
                    titleText = {group.name}
                    hasTextButton = {true} 
                    backgroundColor = "#F2C864" 
                    img = "https://imgs.search.brave.com/TitYnHewK3_G9uMj00kRz6-N0oXEA3ORpqpQN2e8tpA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zd2Vl/dGhpbGx3b29kLmNv/bS9pbWFnZXMvdGh1/bWJzLzAwMDIyMjNf/d29vZC1jaGVzcy1i/b2FyZC1ibGFjay13/YWxudXQtYW5kLWN1/cmx5LW1hcGxlLTIt/aW5jaC1zcXVhcmVz/LmpwZWc"
                    buttonData = {[
                        {id: "1", children: "Organizer Profile", isStretched: true},
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
                        header = "Activities"
                        content = 
                        {<CardContentList
                            arrow = {false}
                            hasButton = {false}
                            items = {activities}>
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
                            items = {groupEvents}>
                        </CardContentList>}
                        hasButton = {false}>
                    </CollapsibleCard>

                    <div className={`${style.report_button_container}`}>
                        <ReportGroupModal />
                    </div>
                </div>
            </div>
            <div className={`${style.menu_container}`}>
                <SideNav></SideNav>
            </div>
        </div>
    )
}