import * as React from "react";
import { useState, useEffect } from "react";
import WISEHeaderSearch from "../Components/Headers/WISEHeaderSearch";
import ListButton from "../Components/List/ListButton"
import style from "../Styles/Search.module.css"
import '../App.css';
import '../var.css';
import Icon from '../Assets/icons.js';
import SideNav from '../Components/SideNav/SideNav';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import WISESelect from "../Components/Selects/WISESelect";
import WISETextField from "../Components/Inputs/WISETextField";

import { useNavigate } from "react-router";
import { useBusinessesByName, useBusinessesByRadius } from "../gql/hooks/BCGN";
import { BcgnType, Language, Radius, SortDir } from '../gql/__generated__/graphql';

export default function BusinessesSearch(props){

    // distance select items
    const items = [
        { name: "5 Miles", value: Radius.Lr_05},
        { name: "10 Miles", value: Radius.Lr_10},
        { name: "25 Miles", value: Radius.Lr_30},
        { name: "50 Miles", value: Radius.Lr_50}
    ];

    const navigate = useNavigate();

    // states for distance filtering
    const [distInput, setDistInput] = useState("");
    const [radiusCallInput, setRadiusCallInput] = useState();
    const [radiusCall, { radiusData }] = useBusinessesByRadius(radiusCallInput);

    // states for search filtering
    const [searchCallInput, setSearchCallInput] = useState();
    const [searchCall, { searchData }] = useBusinessesByName(searchCallInput);

    // states for displaying
    const [businesses, setBusinesses] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [searchHeader, setSearchHeader] = useState("All Businesses: ");

    const handleSelectChange = (e) => {
        const selected = e.target.value;
        
        setSearchHeader("Businesses within " + selected + " miles: ");
    
        setDistInput(selected)
        
        // clear search bar
        setSearchInput("")

        // call to api with selected distance
        const input = {
            language: Language.English,
            location: null,
            radius: selected,
            sortDir: SortDir.Asc,
            type: BcgnType.Business
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
            type: BcgnType.Business
        }
        setSearchCallInput(input)
    }

	const select = (
		<WISESelect
			items={items}
			title="Set Distance"
			ko={false}
			selected={distInput}
			handleChange={handleSelectChange}
		/>
	);

	const searchField = (
		<WISETextField
			hasIcon={true}
			placeholder="Search for Businesses..."
			input={searchInput}
			handleChange={handleSearchChange}
			handleEnter={handleSearchEnter}
		/>
	);

	// initial call to api to populate page                
    useEffect(() => {
        const input = {
            language: Language.English,
            location: null,
            radius: Radius.LrVir,
            sortDir: SortDir.Asc,
            type: BcgnType.Business
        }
        setRadiusCallInput(input)
    }, [])

    // make call to api every time distance is updated
    useEffect(() => {
        console.log("radius")
        if (radiusCallInput) {
            // update displayed events
            radiusCall()
            .then((response) => {
                setBusinesses(response.data && response.data.bcgnsByRadius)
            })
            .catch(console.error);
        }
        
    }, [radiusCallInput]);

    // make call to api every time search term is updated
    useEffect(() => {
        console.log("search")
        if (searchCallInput) {
            // update displayed events
            searchCall()
            .then((response) => {
                setBusinesses(response.data && response.data.bcgnsByName)
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
                    backgroundColor="var(--sandy-brown)"
                    title="Businesses"
                    button={false}
                    select={select}
                    searchField={searchField}
                    />

                    <h4 className={style.searchHeader}>{searchHeader}</h4>

                    <div className = {style.list}>
                        {businesses && businesses.map((business) => (
                            <ListButton 
                                title={business.name}
                                buttonName="Profile" 
                                handleClick={() => navigate(`/businesses/${business._id}`)}
                            />
                        ))}
                    
                    </div>
            </div>
            <SideNav />
        </div>
        
    );
}