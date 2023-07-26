import WISEStandardButton from "../Components/Buttons/WISEStandardButton";
import style from "../Styles/welcome.module.css";
import { useNavigate } from "react-router-dom";

export default function Welcome({}) {
	const navigate = useNavigate();

	return (
		<div className={style.page}>
			<div className={style.page1}>
				<div className={style.page2}>
					<div className={style.page3}>
						<p className={style.text}>
							<font color="#F2C864" face="Inter-Bold">
								W{" "}
							</font>
							<font color="#F79653" face="Inter-Bold">
								I{" "}
							</font>
							<font color="#A6CC80" face="Inter-Bold">
								S{" "}
							</font>
							<font color="#8AB6E9" face="Inter-Bold">
								E{" "}
							</font>
							<font face="Inter-Light"> Cities </font>
						</p>

						<div className={style.button}>
							<WISEStandardButton
								type="ko"
								size="large"
								handleClick={() => {
									navigate("/home");
								}}
							>
								Get Started
							</WISEStandardButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
