import WISEStandardButton from '../Components/Buttons/WISEStandardButton';
import style from '../Styles/welcome.module.css';
import { useNavigate } from "react-router-dom";
import WISESelect from  '../Components/Selects/WISESelect';


export default function SelectLanguage({}) {
    const navigate = useNavigate();
    const items = [
        { name: "English" },
        { name: "Spanish" },
        { name: "French" },
        { name: "Italian" },
        ];
    
    return (
        <div className={style.page}>
            <div className={style.page1}>
                <div className={style.page2}>
                    <div className={style.page3}>
                        <p className={style.text1}>
                        
                        <font face="Inter-Light" > Select Language </font>
                        </p>
                        <div className={style.button2}>
                            <WISESelect title="select language" items={items} ko="true"></WISESelect>
                        </div>
                        <div className={style.button1}>
                        <WISEStandardButton type="ko" size="medium" handleClick={() => {navigate("/home")}}>Submit</WISEStandardButton>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}