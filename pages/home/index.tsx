import { NextPage } from "next";
import Image, { ImageLoader } from "next/image";
import Link from "next/link";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import styles from "./styles.module.scss";
import placeholderImage from "../../public/netflix-landing-page-bg.jpeg";
import playCircleIcon from "../../public/play-circle-icon.svg";
import ActionButton from "../../components/ActionButton";
interface IHomePageProps {
	props: {};
}

const HomePage: NextPage<IHomePageProps> = ({ props }) => {
	return (
		<main className={styles.mainContainer}>
			<div className={styles.container}>
				<Link href="/" className={styles.logo}>
					<Logo />
				</Link>
				<div className={styles.navbar}>
					<Navbar />
				</div>
				<Search />
			</div>
			{/* main content */}
			<div className={styles.mainContent}>
				<Image
					src={placeholderImage.src}
					alt="movie poster"
					width={325}
					height={160}
				/>
				<p className={styles.imageText}>2003 | 16 | 2hr30 | action drama</p>
				<p className={styles.contentInfo}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
					quisquam repellendus saepe, delectus consequuntur pariatur maiores
					laborum harum quibusdam possimus distinctio quae accusamus sunt
					aperiam magni placeat sequi quos eos!
				</p>

				<div className={styles.actionButtonsContainer}>
					{/* can add a href attribute to ActionButton to send to specific url */}
					<ActionButton props={{ action: "playButton" }} />
					<ActionButton props={{ action: "addItemButton" }} />
				</div>

				<div className={styles.watchContentContainer}>
					<Image
						src={playCircleIcon.src}
						alt="press to watch content"
						width={40}
						height={40}
					/>
					watch trailer
				</div>
			</div>
		</main>
	);
};

export default HomePage;
