import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import styles from "./styles.module.scss";
import RegisterBar from "../RegisterBar";

interface IProps {}

const Navbar: NextPage<IProps> = () => {
	return (
		<>
			<nav className={styles.nav}>
				<ul className={styles.listContainer}>
					<Link href="/home">
						<li>Home</li>
					</Link>
					<Link href="/">
						<li>TV Shows</li>
					</Link>
					<Link href="/">
						<li>Movies</li>
					</Link>
					<Link href="/">
						<li>Latest</li>
					</Link>
					<Link href="/">
						<li>My List</li>
					</Link>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
