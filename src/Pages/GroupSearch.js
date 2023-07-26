import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WISEHeaderSearch from "../Components/Headers/WISEHeaderSearch";
import WISESelect from "../Components/Selects/WISESelect";
import WISETextField from "../Components/Inputs/WISETextField";
import ListButton from "../Components/List/ListButton";
import style from "../Styles/Search.module.css";
import SideNav from "../Components/SideNav/SideNav";

import { useGroupsByRadius, useGroupsByName } from "../gql/hooks";
import { Language, Radius, SortDir } from '../gql/__generated__/graphql';

export default function GroupSearch(props) {
	
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
    const [radiusCall, { radiusData }] = useGroupsByRadius(radiusCallInput);

    // states for search filtering
    const [searchCallInput, setSearchCallInput] = useState();
    const [searchCall, { searchData }] = useGroupsByName(searchCallInput);

    // states for displaying
    const [groups, setGroups] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [searchHeader, setSearchHeader] = useState("All Groups: ");

    const handleSelectChange = (e) => {
        const selected = e.target.value;
        
        if(selected === Radius.LrVir) {
            setSearchHeader("Virtual groups: ")
        }
        else {
            setSearchHeader("Groups within " + selected + " miles: ");
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
			placeholder="Search for Groups..."
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
        }
        setRadiusCallInput(input)
    }, [])

    // make call to api every time distance is updated
    useEffect(() => {

        if (radiusCallInput) {
			// update displayed events
			radiusCall()
			.then((response) => {
				setGroups(response.data && response.data.groupsByRadius)
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
				setGroups(response.data && response.data.groupsByName)
			})
			.catch(console.error);
		}
        
    }, [searchCallInput]);

	return (
		<div className={style.maincontainer}>
			<div className={style.header}>
				<WISEHeaderSearch
					dark={false}
					hasTextButton={true}
					backgroundColor="var(--maize-crayola)"
					title="Groups"
					button={false}
					select={select}
					searchField={searchField}
				/>
				<h4 className={style.searchHeader}>{searchHeader}</h4>
				<div className={style.list}>
					{groups && groups.map((group) => (
						<ListButton 
							title={group.name} 
							buttonName="Profile" 
							handleClick={() => navigate(`/groups/${group._id}`)}
						/>
					))}
				</div>
			</div>
			<SideNav />
		</div>
	);
}
