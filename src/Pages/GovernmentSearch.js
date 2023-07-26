import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WISEHeaderSearch from "../Components/Headers/WISEHeaderSearch";
import WISESelect from "../Components/Selects/WISESelect";
import WISETextField from "../Components/Inputs/WISETextField";
import ListArrow from "../Components/List/ListArrow";
import style from "../Styles/Search.module.css";
import SideNav from "../Components/SideNav/SideNav";
import { Language, Radius, SortDir, BcgnType } from "../gql/__generated__/graphql";
import { useGovernmentEntitiesByName, useGovernmentEntitiesByRadius} from "../gql/hooks/BCGN";

export default function GovernmentSearch(props) {
	const items = [
        { name: "Virtual", value: Radius.LrVir},
        { name: "5 Miles", value: Radius.Lr_05},
        { name: "10 Miles", value: Radius.Lr_10},
        { name: "25 Miles", value: Radius.Lr_30},
        { name: "50 Miles", value: Radius.Lr_50}
    ];

	function toJSX(_id, name, location){
		return(<ListArrow key={_id} title={name} location={location ? location.address : location} handleClick={() => navigate(`/government/${_id}`)} />)
	}

	const navigate = useNavigate();

	const [governments, setGovernments] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [distInput, setDistInput] = useState("");

	const [callInput, setCallInput] = useState({});
	const [call, {dataR}] = useGovernmentEntitiesByRadius(callInput);

	const [callTextInput, setCallTextInput] = useState({});
	const [callTextGovernments, {dataS}] = useGovernmentEntitiesByName(callTextInput);

	const [searchHeader, setSearchHeader] = useState("All Government Items: ");

	const handleSelectChange = (e) => {
		const selected = e.target.value;
		if(selected === Radius.LrVir) {
            setSearchHeader("Virtual government items: ")
        }
        else {
            setSearchHeader("Government items within " + selected.split("_")[1] + " miles: ");
        }
		setDistInput(selected);
		// call to api with selected distance

		const input = {
			language: Language.English,
            location: null,
            radius: selected,
            sortDir: SortDir.Asc,
			type: BcgnType.GovernmentEntity
		}

		setCallInput(input)
	};

	const handleSearchChange = (e) => {
		setSearchInput(e.target.value);
	};

	const select = (
		<WISESelect
			items={items}
			title="Set Distance"
			ko={false}
			selected={distInput}
			handleChange={handleSelectChange}
		/>
	);

	const submit = (e) => {
		if (e.keyCode === 13) {
			setSearchHeader("Results: ");
			const input = {
				language: Language.English,
				name: searchInput,
				sortDir: SortDir.Asc,
				type: BcgnType.GovernmentEntity
			}
			setCallTextInput(input)
		}
	}

	const searchField = (
		<div id="text-field">
			<WISETextField
				hasIcon={true}
				placeholder="Search for Government Items..."
				input={searchInput}
				handleChange={handleSearchChange}
				onKeyDown={submit}
			/>
		</div>
	);

	useEffect(()=>{
		let governmentResults=[];
		callTextGovernments()
		.then(response=>response.data.bcgnsByName)
		.then((allGovernments=>{
			allGovernments.map(({ _id, name, location })=>{
				governmentResults.push(toJSX(_id, name, location))
			})
		}))
		.catch(console.error)
		.finally(()=>{
			setGovernments(governmentResults);
		})
		
	}, [callTextInput])


	useEffect(() =>{
		let governmentResults = []
		console.log(callInput)
		call()
			.then((res)=>{
				res.data.bcgnsByRadius.map(({ _id, name, location })=>{
					governmentResults.push(toJSX(_id, name, location))
				})
			})
			.catch(console.error)
			.finally(()=>setGovernments(governmentResults))
	}, [callInput])

	useEffect(()=>{
		const input = {
            language: Language.English,
            location: null,
            radius: Radius.LrVir,
            sortDir: SortDir.Asc,
            type: BcgnType.GovernmentEntity
        }
		setCallInput(input)
	}, [])


	return (
		<div className={style.maincontainer}>
			<div className={style.header}>
				<WISEHeaderSearch
					dark={false}
					hasTextButton={true}
					backgroundColor="var(--gray)"
					title="Government"
					button={false}
					select={select}
					searchField={searchField}
				/>
				<h4 className={style.searchHeader}>{searchHeader}</h4>
				<div className={style.list}>
					{governments.map(item => item)}
				</div>
			</div>
			<SideNav />
		</div>
	);
}
