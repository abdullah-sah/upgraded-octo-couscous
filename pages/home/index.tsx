import { NextPage } from "next";
import Link from "next/link";
import Logo from "../../components/Logo";
import styles from "./styles.module.scss";

interface IHomePageProps {
	props: {};
}

const HomePage: NextPage<IHomePageProps> = ({ props }) => {
	return (
		<>
			<div>
				<Link href="/" className={styles.logo}>
					<Logo />
				</Link>
			</div>
		</>
	);
};

export default HomePage;
