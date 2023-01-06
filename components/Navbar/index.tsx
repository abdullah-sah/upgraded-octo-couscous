import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import styles from "./styles.module.scss";
import Search from "../Search";

interface IProps {}

const Navbar: NextPage<IProps> = () => {
	return (
		<div className={styles.container}>
			<nav>
				<ul>
					<Link href="/browse">
						<li>Browse</li>
					</Link>
					<Link href="/">
						<li>Hmmmmm</li>
					</Link>
					<Link href="/">
						<li>Let's see</li>
					</Link>
				</ul>

				<Link href="/">DvD</Link>
				<Search />
			</nav>
		</div>
	);
};

export default Navbar;
