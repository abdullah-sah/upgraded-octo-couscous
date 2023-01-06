import { FunctionComponent } from "react";
import styles from "./styles.module.scss";

interface ILogoProps {
	alignSelf?: boolean;
	justifySelf?: boolean;
}

// prettier-ignore
const Logo: FunctionComponent<ILogoProps> = ({ alignSelf, justifySelf }) => {
	// if alignSelf, give alignSelf class, else if justifySelf, give justifySelf class
	const classes: string = styles.logo + (alignSelf ? styles.alignSelf : justifySelf ? styles.justifySelf : "");
	return (
		<>
			<p className={classes}>NETFLIX</p>
		</>
	);
};

export default Logo;
