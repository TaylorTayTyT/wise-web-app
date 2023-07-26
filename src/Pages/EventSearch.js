import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import WISEHeaderSearch from "../Components/Headers/WISEHeaderSearch";
import WISESelect from '../Components/Selects/WISESelect';
import WISETextField from '../Components/Inputs/WISETextField';
import ListButton from "../Components/List/ListButton"
import ListArrow from "../Components/List/ListArrow"
import style from "../Styles/Search.module.css"
import Icon from '../Assets/icons.js';
import SideNav from '../Components/SideNav/SideNav';

import { useEventsByRadius, useEventsByName } from '../gql/hooks';
import { Language, Radius, SortDir } from '../gql/__generated__/graphql';

export default function EventSearch(props){

    // distance select items
    const items = [
        { name: "Virtual", value: Radius.LrVir},
        { name: "5 Miles", value: Radius.Lr_05},
        { name: "10 Miles", value: Radius.Lr_10},
        { name: "25 Miles", value: Radius.Lr_30},
        { name: "50 Miles", value: Radius.Lr_50}
    ];

    const navigate = useNavigate();

    // states for distance filtering
    const [distInput, setDistInput] = useState("");
    const [radiusCallInput, setRadiusCallInput] = useState();
    const [radiusCall, { radiusData }] = useEventsByRadius(radiusCallInput);

    // states for search filtering
    const [searchCallInput, setSearchCallInput] = useState();
    const [searchCall, { searchData }] = useEventsByName(searchCallInput);

    // states for displaying
    const [events, setEvents] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [searchHeader, setSearchHeader] = useState("All Events: ");

    const handleSelectChange = (e) => {
        const selected = e.target.value;
        
        if(selected === Radius.LrVir) {
            setSearchHeader("Virtual events: ")
        }
        else {
            setSearchHeader("Events within " + selected + " miles: ");
        }
        setDistInput(selected)
        
        // clear search bar
        setSearchInput("")

        // call to api with selected distance
        const input = {
            language: Language.English,
            location: null,
            radius: selected,
            sortDir: SortDir.Asc,
        }
        setRadiusCallInput(input)
    };

    const handleSearchChange = (e) => {
        const searchText = e.target.value;
        setSearchInput(searchText);
    }

    const handleSearchEnter = () => {
        setSearchHeader("Search results: ")

        // clear distance select
        setDistInput("")

        // call to api with search term
        const input = {
            language: Language.English,
            name: searchInput,
            sortDir: SortDir.Asc,
        }
        setSearchCallInput(input)
    }

    const select = <WISESelect 
                    items={items} 
                    title="Set Distance" 
                    ko={false} 
                    selected={distInput}
                    handleChange={handleSelectChange} />
        
    const searchField = <WISETextField 
                    hasIcon={true} 
                    placeholder = "Search for Events..." 
                    input={searchInput}
                    handleChange={handleSearchChange}
                    handleEnter={handleSearchEnter}
                    />

    // initial call to api to populate page                
    useEffect(() => {
        const input = {
            language: Language.English,
            location: null,
            radius: Radius.LrVir,
            sortDir: SortDir.Asc,
        }
        setRadiusCallInput(input)
    }, [])

    // make call to api every time distance is updated
    useEffect(() => {
        if (radiusCallInput) {
            // update displayed events
            radiusCall()
                .then((response) => {
                    setEvents(response.data && response.data.eventsByRadius)
                })
                .catch(console.error);
        }
        
    }, [radiusCallInput]);

    // make call to api every time search term is updated
    useEffect(() => {
        if (searchCallInput) {
            // update displayed events
            searchCall()
                .then((response) => {
                    setEvents(response.data && response.data.eventsByName)
                })
                .catch(console.error);
        }
    }, [searchCallInput]);

    return (
        <div className = {style.maincontainer}>
            
            <div className = {style.header}>
                <WISEHeaderSearch
                    dark={false}
                    hasTextButton={true}
                    backgroundColor="var(--pistachio)"
                    title="Events"
                    button={false}
                    select={select}
                    searchField={searchField} />

                <h4 className={style.searchHeader}>
                    {searchHeader} 
                </h4>

                <div className = {style.list}>
                    {events && events.map(event => 
                        <ListArrow title={event.name} location={event.location && event.location.address} handleClick={() => navigate(`/events/${event._id}`)}/>)
                    }
                </div>
            </div>
            <SideNav />
            
        </div>
        
    );
}