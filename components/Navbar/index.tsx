import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import styles from "./styles.module.scss";
import RegisterBar from "../RegisterBar";

interface IProps {}

const Navbar: NextPage<IProps> = () => {
	return (
		<div className={styles.container}>
			<nav>
				<ul>
					<Link href="/browse">
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
				<RegisterBar />
			</nav>
		</div>
	);
};

export default Navbar;
