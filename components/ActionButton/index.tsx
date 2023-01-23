import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import playIcon from "/public/play-icon.svg";
import addItemIcon from "/public/add-item-icon.svg";
import Link from "next/link";

interface IActionButtonProps {
	props: {
		action: "playButton" | "addItemButton"; // specify type of button
		href?: string;
	};
}

const ActionButton: FunctionComponent<IActionButtonProps> = ({ props }) => {
	return (
		<Link href={props.href ? props.href : "/"}>
			<div
				className={
					props.action === "playButton"
						? styles.playButtonContainer
						: styles.addItemButtonContainer
				}
			>
				<Image
					src={props.action === "playButton" ? playIcon.src : addItemIcon.src}
					alt={
						props.action === "playButton"
							? "press to play media"
							: "press to add item to your list"
					}
					width={26}
					height={28}
				/>
				<p>{props.action === "playButton" ? "Play" : "My List"}</p>
			</div>
		</Link>
	);
};

export default ActionButton;
