import WISEStandardButton from "../../Components/Buttons/WISEStandardButton";
import style from "../../Styles/reports.module.css"
import React, {useState} from "react";

export default function ReportCommunityModal(props) { 
    //Used to manage the button for modal
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
      setModal(!modal);
    };
  
    return (
      <>
        <WISEStandardButton 
            handleClick={toggleModal} 
            children = "Report Community" 
            size = "large" 
            type = "secondary"
        />
  
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className={`${style.overlay}`}></div>
            <div className={`${style.modal_content}`}>
                {/* Placeholder for now*/}
                <WISEStandardButton handleClick = {toggleModal} children = "No" size = "small" type = "secondary" />
                <WISEStandardButton handleClick = {toggleModal} children = "yes" size = "small" type = "primary" />
            </div>
          </div>
        )}
      </>
    );
  }