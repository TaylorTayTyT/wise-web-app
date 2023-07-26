import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EventSearch from "./Pages/EventSearch";
import GroupSearch from "./Pages/GroupSearch";
import BusinessesSearch from "./Pages/BusinessesSearch";
import EventProfile from "./Pages/Profiles/EventProfile";
import GroupProfile from "./Pages/Profiles/GroupProfile";
import BusinessProfile from "./Pages/Profiles/BusinessProfile";
import About from "./Pages/about";
import AppFeedback from "./Pages/appFeedback";
import BugReport from "./Pages/bugReport";
import ContactForm from "./Pages/contactForm";
import Help from "./Pages/help";
import Home from "./Pages/home";
import Language from "./Pages/language";
import Settings from "./Pages/settings";
import Welcome from "./Pages/welcome";
import "./var.css";
import CommunitySearch from "./Pages/CommunitySearch";
import GovernmentSearch from "./Pages/GovernmentSearch";
import NonprofitSearch from "./Pages/NonprofitSearch";
import CommunityProfile from "./Pages/Profiles/CommunityProfile";
import NonprofitProfile from "./Pages/Profiles/NonprofitProfile";
import GovernmentProfile from "./Pages/Profiles/GovernmentProfile";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<div className="pageDisplay">
					<Routes>
						<Route path="/" element={<Welcome/>}/>
						<Route path="/groups" element={<GroupSearch/>}/>
						<Route path="/groups/:groupId" element={<GroupProfile/>}/>
						<Route path="/events" element={<EventSearch/>}/>
						<Route path="/events/:eventId" element={<EventProfile/>}/>
						<Route path="/community" element={<CommunitySearch/>}/>
						<Route path="/community/:communityId" element={<CommunityProfile/>}/>
						<Route path="/nonprofits" element={<NonprofitSearch/>}/>
						<Route path="/nonprofits/:nonProfitId" element={<NonprofitProfile/>}/>
						<Route path="/businesses" element={<BusinessesSearch/>}/>
            <Route path="/businesses/:businessId" element={<BusinessProfile/>}/>
						<Route path="/government" element={<GovernmentSearch/>}/>
						<Route path="/government/:governmentId" element={<GovernmentProfile/>}/>
						<Route path="/resources" />
						<Route path="/home" element={<Home />} />
						<Route path="/appFeedback" element={<AppFeedback />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/about" element={<About />} />
						<Route path="/language" element={<Language />} />
						<Route path="/help" element={<Help />} />
						<Route path="/bugReport" element={<BugReport />} />
						<Route path="/contact" element={<ContactForm />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
