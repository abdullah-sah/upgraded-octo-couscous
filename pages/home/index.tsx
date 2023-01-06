import { NextPage } from "next";
import Link from "next/link";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.scss";

interface IHomePageProps {
	props: {};
}

const HomePage: NextPage<IHomePageProps> = ({ props }) => {
	return (
		<>
			<div className={styles.container}>
				<Link href="/" className={styles.logo}>
					<Logo />
				</Link>
				<div className={styles.navbar}>
					<Navbar />
				</div>
			</div>
		</>
	);
};

export default HomePage;
