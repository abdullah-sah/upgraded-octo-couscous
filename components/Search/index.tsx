import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import searchIcon from "../../public/search-icon.svg";

interface IProps {
	props?: {};
}

const Search: FunctionComponent<IProps> = ({ props }) => {
	return (
		<>
			<div className={styles.container}>
				<Image
					src={searchIcon}
					className={styles.searchImage}
					alt="A search button"
				/>
				<input type="text" className={styles.input} placeholder="Search" />
			</div>
		</>
	);
};

export default Search;
